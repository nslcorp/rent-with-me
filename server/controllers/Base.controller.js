
const normalizeErrors = function(errors) {
  let normalizeErrors = [];

  for (let property in errors) {
    if (errors.hasOwnProperty(property)) {
      normalizeErrors.push({title: property, detail: errors[property].message});
    }
  }

  return normalizeErrors;
}

class BaseController {
  send(req, res) {
    const status = req.resStatus || 200;
    const result = req.resData || {};


    try {
      res.json(result).then(next()).catch(err => req.resStatus())
    } catch (error) {
      res.status(422).send({errors: normalizeErrors(error.errors)});
    }

  }

  // addLastModified(entity) {
  //   return { ...entity, lastModifiedDate: Date.now() };
  // }

  // castFields(data, fields, castFunction) {
  //   fields.forEach(name => {
  //     if (data.hasOwnProperty(name)) {
  //       data[name] = castFunction(data[name]);
  //     }
  //   });
  // }
}

module.exports = BaseController;
