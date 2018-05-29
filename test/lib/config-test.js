var tap = require('tap')
var config = require('../../lib/config')

tap.test('config returns expected object as default', function (test) {
  var options = {}
  var reqOptions = config(options)

  tap.equal(reqOptions.params.out, 'json', 'JSON is default format')
  test.done()
})

tap.test('config returns expected object with inputs', function (test) {
  var options = {
    validator: 'http://html5.validator.nu',
    url: 'https://www.github.com'
  }
  var reqOptions = config(options)

  tap.equal(reqOptions.params.doc, options.url, 'Url is correct')
  tap.equal(reqOptions.url, options.validator, 'Url is correct')
  test.done()
})

tap.test('config returns expected object with input from data', function (test) {
  var options = {
    data: 'http://html5.validator.nu'
  }
  var reqOptions = config(options)

  tap.equal(reqOptions.data, options.data, 'Data is correct')
  tap.equal(reqOptions.method, 'post', 'Method is POST')
  tap.ok(reqOptions.headers, 'Headers are set')
  test.done()
})
