"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = require("@apollo/client");

var _linkError = require("@apollo/link-error");

var _ssr = require("@apollo/client/react/ssr");

var _apolloUploadClient = require("apollo-upload-client");

var _nextWithApollo = _interopRequireDefault(require("next-with-apollo"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createClient(_ref) {
  var headers = _ref.headers,
      initialState = _ref.initialState;
  return new _client.ApolloClient({
    link: _client.ApolloLink.from([(0, _linkError.onError)(function (_ref2) {
      var graphQLErrors = _ref2.graphQLErrors,
          networkError = _ref2.networkError;
      if (graphQLErrors) graphQLErrors.forEach(function (_ref3) {
        var message = _ref3.message,
            locations = _ref3.locations,
            path = _ref3.path;
        return console.log("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
      });
      if (networkError) console.log("[Network error]: ".concat(networkError, ". Backend is unreachable. Is it running?"));
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0, _apolloUploadClient.createUploadLink)({
      uri: process.env.NODE_ENV === 'development' ? _config.endpoint : _config.prodEndpoint,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers: headers
    })]),
    cache: new _client.InMemoryCache({
      connectToDevTools: process.env.NODE_ENV === 'development',
      queryDeduplication: true,
      typePolicies: {
        Query: {
          fields: {// TODO: We will add this together!
            // allProducts: paginationField(),
          }
        }
      }
    }).restore(initialState || {})
  });
}

var _default = (0, _nextWithApollo["default"])(createClient, {
  getDataFromTree: _ssr.getDataFromTree
});

exports["default"] = _default;