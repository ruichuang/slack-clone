import _ from 'lodash';

// _.pick({ a: 1, b: 3}, a) => {a: 1}
// whatever picked, grab the key-value pair from the object
export default (e, models) => {
  if (e instanceof models.sequelize.ValidationError) {
    return e.errors.map(x => _.pick(x, ['path', 'message']));
  }
  return [{ path: 'name', message: 'something went wrong' }];
};