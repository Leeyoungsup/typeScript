"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _apolloServerMicro = require("apollo-server-micro");

var _graphqlTools = require("graphql-tools");

var _mongodb = require("mongodb");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type User {\n    id: ID!\n    firstName: String!\n    lastName: String!\n    blog: String\n    stars: Int\n  }\n\n  type Query {\n    users: [User]!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

require('dotenv').config();

var typeDefs = (0, _apolloServerMicro.gql)(_templateObject());
var resolvers = {
  Query: {
    users: function users(_parent, _args, _context, _info) {
      return _context.db.collection('users').findOne().then(function (data) {
        return data.users;
      });
    }
  }
};
var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});
var db;
var apolloServer = new _apolloServerMicro.ApolloServer({
  schema: schema,
  context: function context() {
    var dbClient;
    return regeneratorRuntime.async(function context$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (db) {
              _context2.next = 12;
              break;
            }

            _context2.prev = 1;
            dbClient = new _mongodb.MongoClient(process.env.MONGO_DB_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });

            if (dbClient.isConnected()) {
              _context2.next = 6;
              break;
            }

            _context2.next = 6;
            return regeneratorRuntime.awrap(dbClient.connect());

          case 6:
            db = dbClient.db('next-graphql'); // database name

            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log('--->error while connecting via graphql context (db)', _context2.t0);

          case 12:
            return _context2.abrupt("return", {
              db: db
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 9]]);
  }
});
var config = {
  api: {
    bodyParser: false
  }
};
exports.config = config;
//# sourceMappingURL=graphql.dev.js.map
