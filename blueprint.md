# Welcome to <%= projectName %> 👋
<% if (isProjectOnNpm) { -%>
[![Version](https://img.shields.io/npm/v/<%= projectName %>.svg)](https://www.npmjs.com/package/<%= projectName %>)
<% } -%>
<% if (projectVersion && !isProjectOnNpm) { -%>
![Version](https://img.shields.io/badge/version-<%= projectVersion %>-blue.svg?cacheSeconds=2592000)
<% } -%>
<% if (projectPrerequisites) { -%>
<% projectPrerequisites.map(({ name, value }) => { -%>
![Prerequisite](https://img.shields.io/badge/<%= name %>-<%= encodeURIComponent(value) %>-blue.svg)
<% }) -%>
<% } -%>
<% if (projectDocumentationUrl) { -%>
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](<%= projectDocumentationUrl %>)
<% } -%>
<% if (isGithubRepos) { -%>
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](<%= repositoryUrl %>/graphs/commit-activity)
<% } -%>
<% if (licenseName) { -%>
[![License: <%= licenseName %>](https://img.shields.io/<%= isGithubRepos ? `github/license/${authorGithubUsername}/${projectName}` : `badge/License-${licenseName}-yellow.svg` %>)](<%= licenseUrl ? licenseUrl : '#' %>)
<% } -%>
<% if (authorTwitterUsername) { -%>
[![Twitter: <%= authorTwitterUsername %>](https://img.shields.io/twitter/follow/<%= authorTwitterUsername %>.svg?style=social)](https://twitter.com/<%= authorTwitterUsername %>)
<% } -%>
<% if (projectDescription) { -%>

> <%= projectDescription %>
<% } -%>

## Install


TODO - <%= projectVersion %>


## Usage


https://github.com/semantic-release/semantic-release


## 🤝 Contributing


Contributions, issues and feature requests are welcome!

Feel free to check [issues page](<%= issuesUrl %>). <%= contributingUrl ? `You can also take a look at the [contributing guide](${contributingUrl}).` : '' %>


## 📝 License


This project is [<%= licenseName %>](<%= licenseUrl %>) licensed.


***
