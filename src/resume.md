# Roy Truelove
## Full Stack FinTech Senior Architect / Developer
+49 176 643 52325<br>
roytruelove@gmail.com
<hr>

# Summary

Well respected, resourceful, passionate developer and team lead with over 15 years of experience in the Financial Industry creating full-stack enterprise solutions. Committed to delivering quality, highly valued products. Have demonstrated formidable development ability across diverse environments. Skilled at balancing pragmatic solutions to tactical issues without sacrificing strategic goals. Willing to challenge the status quo, resulting in a myriad of process and methodology changes that have significantly streamlined development and delivery processes.

Seeking a strategic role in a progressive, forward-looking environment, working with innovative, challenging peers.

<hr>

# Experience

## Dotdash

# TODO
- Director

## Droit Financial Technologies 

### Senior Architect / Developer
Feb 2014 → Aug 2016
*java, spring, apache-camel, jms, activemq, lucene, ehcache, clojure, sql, mysql, oracle, spring-boot, spring-mvc, javascript, jsp, jenkins, docker*

### Background

[Droit Financial Technologies](http://droit.tech), through their Adept product, provide rule-based trading decision engines used by OTC derivative front-office and compliance teams globally, across all OTC asset classes, globally active CCP’s, SEF’s and all G20 aligned regulatory regimes, enabling sell-side firms to make compliant and optimal trading decisions.

As lead developer / architect of the initial development team, I was instrumental in propelling the firm from a startup to the most trusted name in the space with multiple clients across North
America, Europe, and Japan. My contributions were a critical factor in Droit winning [Risk Magazine's Sell Side Trading Technology of the Year](https://www.risk.net/awards/2442696/trading-technology-product-year-sell-side-droit-financial-technologies).

### Responsibilities
* All aspects of full stack Spring-based Java enterprise development, including analysis, design, implementation, testing, delivery and maintenance phases
* Acted as Droit's primary architect, responsible for the majority of the refactoring of the core product. These include:
  * A rewrite of the software's client-facing integration layer, moving from a tightly coupled Java API to a messaging-based API. This simplified installations, opened the door for non-Java clients, and allowed for seamless backwards compatibility as our product evolved
  * Redesign and implementation of the data layer, moving from a large, monolithic client-hosted DB to a light file-based cache. This allowed for further decoupling from client infrastructure and eased the data update process significantly
  * Rewrite of counterparty store layer, allowing Adept to perform full text searches and retrieve all regulatory information from over 500k parties in < 5ms. This change also reduced the memory footprint by ~2g.
  * Spearheading and implementation of multiple performance improvement initiatives, bringing the round trip time of a trade from ~1000ms to ~4ms. This included algorithm analyses, metrics gathering, and JVM / garbage collection tuning
  * Introduced parallelism by factoring out stateful code into immutable / concurrent structures
  * Breaking down of application into microservice-esque units that could be sold individually as either libraries or standalone applications, or could be bundled together as a single deliverable
* Primary technical contact for all clients, building strong, trust-based relationships with both the business and development teams
  * Responsible for gathering and vetting functional and technical requirements and constraints
  * Worked both internally and externally to ensure that client needs could be met without compromising the quality / robustness of the product
  * Led all implementations and installations at client sites
  * Day-to-day support
* Implemented and maintained industrialization and devops processes using Jenkins and Docker . This included:
  * Automated building, testing, and deployment of over a dozen disparate client configurations
  * Source control branching, naming, and pull request conventions
  * Automated packaging and signing of client deliverables

## IHS Markit (MarkitSERV)

Client-side Technologies - R&D and 'Evangelist' – MarkitSERV Sep 2012 → Feb 2014
coffeescript, javascript, angularjs, spring-mvc, jackson, web-services, twitter-bootstrap, jasmine, git
Background

provides a single gateway for OTC derivatives trade processing. They are an end-to-end solution for post-trade transaction management of credit, interest rate, equity
and foreign exchange derivatives.
MarkitSERV
Historically, MarkitSERV's application interfaces have been either native C++ applications locally installed for all clients, or server-side-rendered web applications (JSPs) with little
interactivity. During a 'lull' in my responsibilities, I offered to take on R&D of technologies that would keep us competitive with up-and-coming firms taking advantage of the disruption
caused by new regulatory requirements. This has since been my full time role.
Responsibilities / Achievements
Researched cutting-edge web-based technologies to create a proposed 'stack' for all future MarkitSERV application interfaces. The stack was comprised of:

A web-service based API framework, based on 's conventions. Designed and developed a functional reference implementation of this framework as an internally-
shared library.

Amazon ES2

'Twitter Bootstrap'-based css framework, customized to match existing MarkitSERV styles.
AngularJS-based javascript framework to create Single Page Applications (SPA). Authored documented conventions on how to scale out to very large-scale apps.
Standardized widget library, wrapped with AngularJS 'directives'.
Jasmine-based testing framework
Created many 'failed' proofs-of-concept using other technologies, including REST-based backends, Ember-based frontends, etc.
Attended AngularJS 'meetup' meetings to discuss the framework with other users
Responsible for presenting all findings to peers and upper management.
Advised teams looking to implement these technologies in new systems, as well as integrating them into legacy apps.
Researched best practices around CI and source control (git) conventions, holding training sessions and creating reference documentation.