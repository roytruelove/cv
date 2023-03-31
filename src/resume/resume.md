---
layout: resume.hbs
---
# Roy Truelove
## Technology Strategist
+49 176 643 52325<br>
roytruelove@gmail.com
<hr>

# Summary

Well respected, resourceful, passionate software development partner with over 20 years of experience creating and managing full-stack enterprise solutions.  Committed to delivering quality, highly valued, human-centric products.  Have demonstrated formidable development and management abilities across diverse environments.  Skilled at finding pragmatic solutions to tactical issues without sacrificing strategic goals.  Willing to challenge the status quo as a catalyst for business-wide step changes.

Seeking a strategic role in a progressive and forward-looking environment, working with innovative, dynamic people.

<hr>

# Experience
## Dotdash Meredith (FKA Dotdash, about.com)
### Director, Java Development
May 2017 → Feb 2021<br>
*java, spring-boot, spring-mvc, ehcache, redis, kafka, javascript, docker*

#### Position Summary

Dotdash Meredith is the largest digital and print publisher in the US.  As the director of the 'globe-core' team, I was responsible for the server technology on top of which all traffic was rendered and served.  I was instrumental in both the internal and external growth of Dotdash, working with the business and tech teams to determine how best to evolve from a small company to a medium-sized company in as painless a way as possible.  During my tenure Dotdash expanded from 6 to 14 properties, with an 30% increase in unique monthly page views, from 70MM to 100MM.

#### Position Details - Responsibilities and Achievements
* Lead developer of the 'globe-core' framework, our spring-based server and rendering engine.  The framework allowed Dotdash to consistently be amongst the fastest publishers worldwide.
* Director of the 'globe-core' dev team, managing ~12 developers both local and remote, junior and senior.  Responsible for performance reviews, training, mentorship, delegation, and morale.  Many of my reports went on to be successful managers themselves.
* Spearheaded the refactoring of globe-core from a legacy monolith to a modularized spring-boot library.  This gave the different properties the power to override and extend core functionality as needed while still maintaining our speed and security.  It also allowed us to go live with new/acquired properties within very short periods of time.
* Held influence over technical decisions across teams.  Often employed in a consultant capacity for large technology changes in other parts of firm such as vendor/stack selection, buy vs. build, best practices, documentation, release pipelines, etc.
* My good reputation with the business allowed me to act as a 'technology diplomat', working closely with the business to identify pain-points and inefficiencies, provide high-level overviews for non-technical employees, drive and participate in firm-wide Hackathons, and 'reach across the isle' to find holistic cross-team solutions.
* Managed our GDPR implementation without sacrificing performance, allowing us to stay relevant in the European market.
* Oversaw several acquisitions (notably Investopedia.com), working with the acquired companies to onboard both technologically and culturally.

## Droit Financial Technologies 

### Senior Architect / Developer
Feb 2014 → Aug 2016<br>
*java, spring, apache-camel, jms, activemq, lucene, ehcache, clojure, sql, mysql, oracle, spring-boot, spring-mvc, javascript, jsp, jenkins, docker*

#### Position Summary

[Droit Financial Technologies](http://droit.tech), through their Adept product, provide rule-based trading decision engines used by OTC derivative front-office and compliance teams globally, across all OTC asset classes, globally active CCP's, SEF's and all G20 aligned regulatory regimes, enabling sell-side firms to make compliant and optimal trading decisions.

As lead developer / architect of the initial development team, I was instrumental in propelling the firm from a startup to the most trusted name in the space with multiple clients across North America, Europe, and Japan. My contributions were a critical factor in Droit winning [Risk Magazine's Sell Side Trading Technology of the Year](https://www.risk.net/awards/2442696/trading-technology-product-year-sell-side-droit-financial-technologies).

#### Position Details - Responsibilities

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

### Client-side Technologies - R&D and 'Evangelist'
Sep 2012 → Feb 2014<br>
*coffeescript, javascript, angularjs, spring-mvc, jackson, web-services, twitter-bootstrap, jasmine, git*

#### Position Summary

* [MarkitSERV](https://ihsmarkit.com/products/markitserv.html) provides a single gateway for OTC derivatives trade processing. They are an end-to-end solution for post-trade transaction management of credit, interest rate, equity and foreign exchange derivatives.
* Historically, MarkitSERV's application interfaces have been either native C++ applications locally installed for all clients, or server-side-rendered web applications (JSPs) with little interactivity. During a 'lull' in my responsibilities, I offered to take on R&D of technologies that would keep us competitive with up-and-coming firms taking advantage of the disruption caused by new regulatory requirements. This became my full-time role.

#### Position Details - Responsibilities / Achievements
* Researched cutting-edge web-based technologies to create a proposed 'stack' for all future MarkitSERV application interfaces. The stack was comprised of:
  * A web-service based API framework, based on AmazonES2's conventions. Designed and developed a functional reference implementation of this framework as an internally- shared library.
  * 'Twitter Bootstrap'-based css framework, customized to match existing MarkitSERV styles.
  * AngularJS-based javascript framework to create Single Page Applications (SPA). Authored documented conventions on how to scale out to very large-scale apps.
  * Standardized widget library, wrapped with AngularJS 'directives'.
  * Jasmine-based testing framework
* Created many 'failed' proofs-of-concept using other technologies, including REST-based backends, Ember-based frontends, etc.
* Attended AngularJS 'meetup' meetings to discuss the framework with other users
* Responsible for presenting all findings to peers and upper management.
* Advised teams looking to implement these technologies in new systems, as well as integrating them into legacy apps.
* Researched best practices around CI and source control (git) conventions, holding training sessions and creating reference documentation.

### Lead Developer / Architect - FX Clearing Connectors
May 2011 → Sep 2012<br>
*java, spring, spring-mvc, activemq, apache-camel, jenkins, git*

#### Position Summary 

* The FX Clearing Connectors project defines a single interface between FXMatcher and all FX clearinghouses (CCPs), providing MarkitSERV FX clients with a single pipe for all FX trades, regardless of CCP.

#### Position Details - Responsibilities / Achievements

* Team lead, head architect, and developer for MarkitSERV's FX Clearing Connectors project.
* Refactored application to allow for additional CCPs to be supported quickly, independently of other CCP implementations.
* Heavy proponent of testing and CI, making this project the first to leverage fully automated unit and integration tests, as well as daily builds and one-click deployments.
* Innovated application management by implementing a Groovy console for all non-daily administrative tasks as opposed to exposing those functions on a UI. This allowed us to go live weeks ahead of time while still providing the same level of administrative power.
* Successfully oversaw the launches of both the SGX and CME connectors.

### Business Analyst - Markit Trade Manager
Oct 2009 → May 2011<br>
*jruby, jira, confluence*

#### Position Summary 

* Markit Trade Manager (MTM) provides a single entry point into MarkitSERV's confirmation and clearing services for buy-side clients. MTM can consume all OTC trades across asset classes, and route them to the appropriate MarkitSERV system (DSMatch, MarkitWire, paper flow, etc.) for confirmation and clearing by the sell-side.

#### Position Details - Responsibilities / Achievements

* Lead analyst on MTM's Rates and Credit clearing requirements. These allowed buy-sides to painlessly meet Dodd-Frank clearing mandates by shielding them from disparate clearinghouse requirements.
* Lead analyst for MTM's 'post trade event' build out, giving buy-sides increased flexibility in booking complicated novation / termination events.
* Lead analyst on MTM's Commodities build out, allowing buy-sides to route OTC commodities trades to MarkitWire for sell-side users to confirm.
* Responsible for 'owning' a given high-level requirement, including breaking it down into smaller components, creating test / use cases, fully understanding business requirements and communicating them to Development.
* Leveraged development background to find common ground between Product and Development teams when requirements were difficult / dangerous to achieve in a given time frame.
* Spearheaded and implemented firm-wide documentation repository using Confluence. Responsible for organization of Confluence structure across all teams, as well as providing training material and hands-on demonstrations.
* Revamped issue tracking process in JIRA, ensuring that each issue was vetted by the Analysis, Development, and Testing teams before making it into Production.
* Developed a standardized specification format creating consistent functional and technical specs for all MTM projects. This helped to ensure that no information necessary for the development team was omitted.
* Developed ‘investigation' scripts to integrate with the MarkitWire API. These allowed ‘deep dives' into the API, facilitating the writing of technical specs defining the integration between MTM and MarkitWire.
* Quickly became the point person for most internal MTM issues / questions across markitSERV teams (Support, Testing, Implementation, etc.)
* Accompanied sales team on client meetings, playing the role of MTM's subject matter expert.

## Citadel Investment Group (Continued)

### Help and Training Analyst- Citadel Solutions Mar 2009 → Sep 2009
*madcap, html, css, technical-writing*<br>

#### Position Summary 
* Citadel Solutions (acquired by Northern Trust) was a fund administrator responsible for the back-office operations of several major hedge funds, including Citadel Investment Group.  The ARK project (now known as Northern Trust Passport) was a full software stack covering all the entire breadth of fund administration, including cash transfers, P/L reports, subscriptions / redemptions, etc.

#### Position Details - Responsibilities / Achievements
* Responsible for designing, launching, and gathering and writing all content for a state-of-the-art knowledge base and training program the ARK project.  The knowledge base effectively became a complete guide to hedge fund management processes.
* Managed all subject-matter-expert relationships to collect, organize, write, and present domain knowledge used to create training and knowledge bases intended for both internal and client use.
* Acted as liaison between business and development to ensure that functionality and user interfaces met business standards.

### Developer / Business Analyst - Client Services Team 
Oct 2007 → Apr 2008<br>
*vba, excel, perl*

* Acted as interface between IT group and client account managers, ensuring that needs of clients were understood, implemented, and tested correctly by IT .
* Tasked with becoming intimately involved with daily tasks of both the in-house team and those of our clients, with the goal of identifying process / data bottlenecks that could be resolved with IT involvement.
* Because of my proficiency in bridging the gap between the business and IT, I was often pulled into unrelated projects to ensure that they gained traction.
* Responsible for creating quick report and reconciliation implementations to satisfy immediate client demand while IT implemented more permanent solutions. This removed the technology bottleneck and allowed the business to grow at the same pace as our clients'.
* Designed and implemented the ‘Trade Upload Tool', used by all clients to manually upload daily trades to Citadel Solutions. The tool provided clients built-in documentation and immediate data verification, and was written in such a way that it could be quickly extended by the business without the need for IT ,allowing for quick turnaround of new asset classes.

## Hedgespeed
### Lead Developer / Project Manager

Sep 2006 → Mar 2007<br>
*c#, biztalk, perl, msmq, nant, bugzilla, svn*

* Lead analyst and developer for Hedgespeed's integration layer, used to pull Stock Loan availability from Prime Brokers in both real-time and as a batch.
* Designed the layer to be able to respond quickly to the addition of new brokers as well as sudden format changes, with minimal disruption to the production system.
* Ensured that code closely followed existing Enterprise Integration Patterns (EIP) to conform to industry standards for integration architectures.
* Responsible for enforcing software best practices on development team by improving unit testing, build process, bug tracking, and source control management. This substantially decreased both the effect on ‘non-coding' time for the team and the deployment time, allowing for quicker turn-around in testing.

## Citadel Investment Group

### Team Lead - Counterparty Communications Team

Mar 2005 → Mar 2006<br>
*perl, java*

* Charged with managing a team that previously had no lead; created processes, documentation, and acted as reporting layer to upper management.  This changed ‘legitimized' the team in the eyes of management, created a workable support / development balance for team members, and improved the relationship between the team and their business clients.  Managed data communications relationships with new counterparties, and ensured that all data necessary for back office operations was available and delivered consistently by those counterparties.
* Managed team responsible for incoming and outgoing communications with counterparties (hundreds of files daily).  Maintained and updated ‘PBComm' system, used to pull files from various transport layers (FTP, email, MQ, etc), parse the data in those files (in over 700 different formats), and load the data into our system in a timely manner usually before trading hours.
* Maintained business rules on data parsing, used to ensure that data was accurately ‘translated' between the counterparty's system and our own.

### Lead Analyst / Developer- OTC Confirmations
Oct 2004 → Mar 2005<br>
*mq, xml, c++*

* Designed and developed OTC Trade confirmation process for IRSs, CDSs, OTC Options, and Variance Swaps using DTCC's Deriv/SERV electronic matching system, allowing for significant trade volume increases, as well as reduced operational risk.
* Engineered DTCC software to allow for quick, dynamic addition of new OTC products, making Citadel the technology driver by consistently being the first DTCC member to test and go live with new products (notably Interest Rate Swaps).
* Was an active participant in DTCC working group with various buy-side and sell-side firms to drive the direction of testing and future products.
* Sole developer / analyst on the project, responsible for all business analysis, requirements gathering, development, testing, maintenance, and enhancements.
* Worked with members of the DSWG ISDA working group to design and implement the DSWG FPML extension, intended as a standard file format used for OTC product reconciliation.
* Automated CDS payment reconciliations using DTCCs' Deriv/SERV.

### Software Developer - Legal and Compliance
May 2004 → Oct 2004<br>
*perl, java*

* Responsible for creating and maintaining feeds from government agencies for anti-money laundering, terrorism, etc, to ensure government compliance on a daily basis.
* Implemented Scrittura's contract tracking software, allowing the team to react quickly to provision triggers in contracts (eg NVA decline events, key man events, etc).
* Maintained Insider Trading software (iTrade). Responsible for creating all integration points (all trade feeds and all employee broker statements), as well as configuring the software to enforce the rules of our insider trading policies.
* Responsible for various accounting reports, used by the legal team to reduce cost of outside council.

### Software Developer - Energy Back Office
Feb 2004 → May 2004<br>
*perl*

* Designed and implemented integration with the ICE eConfirm system, allowing for STP confirmation of all eligible Energy trades. This enabled a 300% trade volume increase, and was the quickest implementation of the eConfirm product to date.
* Designed and implemented automated paper-based ISDA OTC confirmation system using Scrittura.  Responsible for all specification gathering from front-end users as well as traders. This system removed the manual process of drafting, faxing, and scanning several hundred trade confirmations per week.

## Scrittura

### Client Services Software Engineer
Aug 2002 → Feb 2004<br>
*java, ejb-3.0, weblogic*

* Redesigned integration between Scrittura's document retention and document generation modules to allow for decoupling and pluggable retention systems.
* Managed several client implementations of the Scrittura software at both buy-side and sell-side firms, in some cases enabling full STP of the OTC trade from front office through to confirmation.
* Responsible for implementing best-practices with regard to build scripts / environment, automated builds, and source Control.  These changes created a one-click build system, allowing us to quickly upgrade clients to new builds using configuration files(.cvs, ant)
* Responsible for on-site client training and support at client firms.

## pulver.com
### Software Engineer
June 2000 → Mar 2002<br>
*java, oracle, swing, ejb, web-services*

* Converted flat-file legacy company database to relational database.
* Created complete EJB interface to new database. (Java, EJB 1.2)
* Wrote and implemented proprietary HTTP based protocols for legacy AWK-based systems to communicate with new EJB systems. (Java, Servlets,Tomcat)
* Redesigned “slides.pulver.com” for integration with legacy systems. Converted the site to a fee-based service using Verisign's Payflow Link. (JSP / Servlets, EJB 1.2, Struts)
* Created app for “scrubbing” databases in order to impose relational constraints (Java Swing)

# Education
* **Bachelor of Science** - Computer Science - Binghamton University 1996 → 2001 (Dean's List)
* **Bachelor of Arts** - Philosophy - Binghamton University 1996 → 2001 (Dean's List)