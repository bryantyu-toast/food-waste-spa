# banquet-child-spa

A banquet-child-spa is designed to be loaded by a banquet-layout eg <https://github.com/toasttab/restaurant-admin-layout>
Ideally it should not have child SPAs of it own, but this is a convention rather than a technical limitation.

## How to register a SPA

Spas should now be managed via Tadpole via SPA Control. [See this document](https://toasttab.atlassian.net/wiki/spaces/FE/pages/491847930/How+to+Create+a+new+SPA#Configure-Tadpole-and-SPA-control)

## How to develop locally or live on preproduction

Please refer to the following documentation: [Import map overrides dev tooling](https://toasttab.atlassian.net/wiki/spaces/FE/pages/2562883591/Import+map+overrides+dev-tooling#Override-the-Import-Map).

## Best practices

- Load child SPAs into layout-spas using the BanquetLoader package.
- If you need to load your SPA into legacy pages consider using the Widget SPA template.
