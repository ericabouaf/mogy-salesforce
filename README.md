# mogy-salesforce

Salesforce activities for [mogy](https://github.com/neyric/mogy).

## Installation

In your mogy project, install the dependency using npm :

    $ npm install mogy-salesforce --save

To register the `salesforce` activity to Amazon Simple Workflow :

    $ mogy register

## Config

In your mogy environment config file, under the `activities` key, add :

````json
"salesforce": {
    "username": "username@domain.com",
    "password": "password+securitytoken",

    "connectionOptions": {
        "loginUrl": "https://test.salesforce.com/"
    }
}
````

:warning: The password attribute is composed of your password + you security token.

For a full reference on the connectionOptions, see <http://jsforce.github.io/jsforce/doc/Connection.html>

## Sample Decider Usage

````javascript
activity({
    name: 'some-query',
    activity: 'salesforce_query',
    input: {
        query: 'SELECT Id, Name FROM Account'
    }
})
````

## Provided activities

* `salesforce_query`: `query`,
* `salesforce_create`: `type`, `records`, `options`,
* `salesforce_delete`: `type`, `ids`, `options`,
* `salesforce_deleted`: `type`, `start`, `end`,
* `salesforce_describe`: `type`,
* `salesforce_queryAll`: `soql`,
* `salesforce_queryMore`: `locator`,
* `salesforce_recent`: `type`, `limit`,
* `salesforce_retrieve`: `type`, `ids`, `options`,
* `salesforce_search`: `sosl`,
* `salesforce_update`: `type`, `records`, `options`,
* `salesforce_upsert`: `type`, `records`, `extIdField`, `options`,
* `salesforce_identity`: ,
* `salesforce_describeGlobal`: ,
* `salesforce_updated`: `type`, `start`, `end`

For a full documentation reference on the attributes, see <http://jsforce.github.io/jsforce/doc/Connection.html>
