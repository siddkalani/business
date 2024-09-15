import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
  return (
    <nav
                    className="navbar navbar-default"
                    role="navigation"
                >
                    <div id="primary-navigation">
                        <ul
                            className="nav navbar-nav"
                            id="menu-mega-menu"
              >
                  <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-8261 current_page_item menu-item-has-children menu-item-45941 dropdown">
                                <Link to='main'
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    tabIndex="0"
                                >
                                    Home
                                </Link> </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-8261 current_page_item menu-item-has-children menu-item-45941 dropdown">
                                <a
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    tabIndex="0"
                                >
                                    Services
                                </a>
                                <div className="dropdown-menu">
                                    <div className="wrapper">
                                        <div className="item-meta">
                                            <span className="item-heading">
                                                <a href="">
                                                    Our                                            Services
                                                </a>
                                            </span>
                                            <p className="item-desc" />
                                        </div>
                                        <ul className="nav nav-tabs">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45998">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-45998-pane"
                                                >
                                                    Advisory
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-48779">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-48779-pane"
                                                >
                                                    Audit and Assurance
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46190">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-46190-pane"
                                                >
                                                    Consulting
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45950">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-45950-pane"
                                                >
                                                    Environmental, social and governance
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45993">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-45993-pane"
                                                >
                                                    People and Change
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45939">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-45939-pane"
                                                >
                                                 Financial services advisory
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content">
                                        <div
                                            className="tab-pane "
                                            id="menu-item-45998-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#">
                                                    Enterprise                                            Portfolio and Program Management
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-47739">
                                                    <a href="#">
                                                        Strategic                                                Portfolio Management
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-47740">
                                                    <a href="#">
                                                        PMO                                                Consulting
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-47741">
                                                    <a href="#">
                                                        PMO                                                as a Service
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-48779-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#">
                                                    Experience                                            Design
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-51047">
                                                    <a href="#">
                                                        Customer                                                Experience Design
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-48756">
                                                    <a href="#">
                                                        Customer                                                Experience Research & Discovery
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-48755">
                                                    <a href="#">
                                                        Digital                                                Design
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-46190-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/business-consulting/human-capital-management-workforce-management/">
                                                    Human                                            Capital Management / Workforce Management
                                                </a>
                                            </span>
                                            <p className="tab-description">
                                                We help clients transform and manage their human capital                                        technologies, processes and operations for long-term success.
                                            </p>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-49285">
                                                    <a href="#/business-consulting/human-capital-management-workforce-management/">
                                                        HCM/WFM                                                Strategy
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49286">
                                                    <a href="#/business-consulting/human-capital-management-workforce-management/">
                                                        HCM/WFM                                                Deployment & Optimization
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49287">
                                                    <a href="#/business-consulting/human-capital-management-workforce-management/">
                                                        HCM/WFM                                                Systems Operations
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49290">
                                                    <a href="#/business-consulting/human-capital-management-workforce-management/">
                                                        symplr
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49289">
                                                    <a href="#/business-consulting/human-capital-management-workforce-management/">
                                                        UKG
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49288">
                                                    <a href="#/business-consulting/human-capital-management-workforce-management/">
                                                        Workday
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-45950-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/business-consulting/operational-excellence-consulting/">
                                                    Operational                                            Excellence Consulting
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-49468">
                                                    <a href="#/business-consulting/operational-excellence-consulting/business-process-improvement-consulting/">
                                                        Business                                                Process Improvement
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-45968">
                                                    <a href="#/business-consulting/operational-excellence-consulting/business-process-management-bpm/">
                                                        Business                                                Process Management
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49520">
                                                    <a href="#/business-consulting/operational-excellence-consulting/centers-of-process-excellence-consulting/">
                                                        Centers                                                of Process Excellence
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-48394">
                                                    <a href="#/technology-solutions/enterprise-automation-services/">
                                                        Enterprise                                                Automation
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-45963">
                                                    <a href="#/business-consulting/operational-excellence-consulting/supply-chain-operations-consulting/">
                                                        Supply                                                Chain Operations
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-45993-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/business-consulting/people-and-change-consulting/">
                                                    People                                            and Change
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-45995">
                                                    <a href="#/business-consulting/people-and-change-consulting/organizational-change-management/">
                                                        Change                                                Management
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-45997">
                                                    <a href="#/business-consulting/people-and-change-consulting/enterprise-change-management/">
                                                        Enterprise                                                Change Management
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-45996">
                                                    <a href="#/business-consulting/people-and-change-consulting/hybrid-workplace-strategy/">
                                                        Hybrid                                                Workplace Strategy
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-45939-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/business-consulting/strategy-alignment-and-architecture/">
                                                    Strategy                                            Alignment and Architecture
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-45959">
                                                    <a href="#/business-consulting/strategy-alignment-and-architecture/business-architecture/">
                                                        Business                                                Architecture
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-45948">
                                                    <a href="#/business-consulting/strategy-alignment-and-architecture/business-transformation-consulting/">
                                                        Business                                                Transformation
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-45945">
                                                    <a href="#/business-consulting/strategy-alignment-and-architecture/executive-advisory-services/">
                                                        Executive                                                Advisory Services
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-45946">
                                                    <a href="#/business-consulting/strategy-alignment-and-architecture/mergers-acquisitions-and-divestitures-consulting/">
                                                        Mergers,                                                Acquisitions and Divestitures
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-45947">
                                                    <a href="#/business-consulting/strategy-alignment-and-architecture/stratatecture/">
                                                        StratATecture
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="features">
                                        <span>
                                            Features and beyond
                                        </span>
                                        <div className="feature">
                                            <a
                                                className="stretched-link"
                                                href="#/ub/ctnt_accelerating_strategy_execution_eppm_white_paper/?source=website"
                                            >
                                                Improve Your PMO
                                            </a>
                                            <p>
                                                White Paper: Learn 5 approaches to execute strategy and elevate your project                                        management office.{' '}
                                            </p>
                                        </div>
                                        <div className="feature">
                                            <a
                                                className="stretched-link"
                                                href="#/checklist/ub-enterprise-automation-rpa-and-bpm/"
                                            >
                                                What's Your Automation Maturity?
                                            </a>
                                            <p>
                                                Assessment: Learn how to take your automation efforts up a notch based on what                                        you're doing currently.{' '}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45910 dropdown">
                                <Link to='industries'
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    tabIndex="0"
                                >
                                    Industries
                                </Link>
                                <div className="dropdown-menu">
                                    <div className="wrapper">
                                        <div className="item-meta">
                                            <span className="item-heading">
                                                <a href="#/technology-solutions/">
                                                    Industries
                                                </a>
                                            </span>
                                            <p className="item-desc" />
                                        </div>
                                        <ul className="nav nav-tabs">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46180">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-46180-pane"
                                                >
                                                    Artificial Intelligence
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46185">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-46185-pane"
                                                >
                                                    Customer Relationship                                            Management
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46187">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-46187-pane"
                                                >
                                                    Cybersecurity
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46003">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-46003-pane"
                                                >
                                                    Digital Transformation
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45911">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-45911-pane"
                                                >
                                                    Data & Analytics
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46200">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-46200-pane"
                                                >
                                                    Enterprise Automation
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46009">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-46009-pane"
                                                >
                                                    Enterprise Resource                                            Planning
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46020">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-46020-pane"
                                                >
                                                    IT Strategy
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46023">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-46023-pane"
                                                >
                                                    Modern Software Delivery
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46205">
                                                <a
                                                    data-toggle="tab"
                                                    href="#menu-item-46205-pane"
                                                >
                                                    Modern Workplace
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content">
                                        <div
                                            className="tab-pane "
                                            id="menu-item-46180-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/technology-solutions/artificial-intelligence-consulting/">
                                                    Artificial                                            Intelligence
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-49078">
                                                    <a href="#/technology-solutions/artificial-intelligence-consulting/">
                                                        AI                                                Strategic Planning, Governance and Security
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49079">
                                                    <a href="#/technology-solutions/artificial-intelligence-consulting/">
                                                        Enterprise                                                Intelligence and Analytics
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49080">
                                                    <a href="#/technology-solutions/artificial-intelligence-consulting/">
                                                        AI                                                Innovation
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49081">
                                                    <a href="#/technology-solutions/artificial-intelligence-consulting/">
                                                        Quick                                                Start AI
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-46185-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/technology-solutions/crm-consulting-services/">
                                                    Customer                                            Relationship Management
                                                </a>
                                            </span>
                                            <p className="tab-description">
                                                Engage your prospects and customers to drive business                                        outcomes and provide better experiences.
                                            </p>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-49268">
                                                    <a href="#/technology-solutions/enterprise-resource-planning/microsoft-dynamics-365-consulting/">
                                                        Dynamics                                                365
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49270">
                                                    <a href="#/technology-solutions/oracle/netsuite/">
                                                        NetSuite
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49269">
                                                    <a href="#/technology-solutions/salesforce-consulting-services/">
                                                        Salesforce
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-46187-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/technology-solutions/cybersecurity-consulting-services/">
                                                    Cybersecurity
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-49073">
                                                    <a href="#/technology-solutions/cybersecurity-consulting-services/">
                                                        Audit                                                & Assurance
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49074">
                                                    <a href="#/technology-solutions/cybersecurity-consulting-services/governance-risk-and-compliance-services/">
                                                        Governance                                                Risk & Compliance
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-51101">
                                                    <a href="#/technology-solutions/cybersecurity-consulting-services/penetration-testing-services/">
                                                        Penetration                                                Testing Services
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49075">
                                                    <a href="#/technology-solutions/cybersecurity-consulting-services/">
                                                        Identity                                                Access Management (IAM)
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49076">
                                                    <a href="#/technology-solutions/cybersecurity-consulting-services/">
                                                        Secure                                                Work Environment
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-51317">
                                                    <a href="#/technology-solutions/cybersecurity-consulting-services/virtual-ciso-services/">
                                                        Virtual                                                CISO Services & Cybersecurity Strategy
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-46003-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/digital-transformation-consulting/">
                                                    Digital                                            Transformation
                                                </a>
                                            </span>
                                            <p className="tab-description">
                                                Digitally enabling your business functions for the                                        technology world of the 21st century.
                                            </p>
                                            <ul className="nav">
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane"
                                            id="menu-item-45911-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/technology-solutions/data-analytics/">
                                                    Data                                            & Analytics
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-45999">
                                                    <a href="#/technology-solutions/data-analytics/data-governance/">
                                                        Data                                                Governance
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-46000">
                                                    <a href="#/technology-solutions/data-analytics/data-modernization-services/">
                                                        Data                                                Modernization Services
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-46189">
                                                    <a href="#/technology-solutions/data-analytics/data-strategy/">
                                                        Data                                                Strategy
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-51054">
                                                    <a href="#/technology-solutions/data-analytics/machine-learning-consulting/">
                                                        Machine                                                Learning Consulting
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49272">
                                                    <a href="#/technology-solutions/data-analytics/data-visualizations-and-insights/">
                                                        Visualization                                                & Insights
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-46200-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/technology-solutions/enterprise-automation-services/">
                                                    Enterprise                                            Automation
                                                </a>
                                            </span>
                                            <p className="tab-description">
                                                If you’ve ever looked at a business process and thought                                        “there’s got to be a better way,” enterprise automation is the answer.
                                            </p>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-49275">
                                                    <a href="#/technology-solutions/enterprise-automation-services/">
                                                        Automation                                                Governance
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49273">
                                                    <a href="#/business-consulting/operational-excellence-consulting/business-process-management-bpm/">
                                                        Business                                                Process Management
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49274">
                                                    <a href="#/business-consulting/operational-excellence-consulting/robotic-process-automation-consulting/">
                                                        Robotic                                                Process Automation
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-46009-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/technology-solutions/enterprise-resource-planning/">
                                                    Enterprise                                            Resource Planning
                                                </a>
                                            </span>
                                            <p className="tab-description">
                                                ERP implementations are always challenging. ​Whether                                        you’re interested in optimizing your current ERP platform, moving to the Cloud,                                        or considering your first implementation, we can help.
                                            </p>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-49277">
                                                    <a href="#/technology-solutions/enterprise-resource-planning/microsoft-dynamics-365-consulting/">
                                                        Microsoft                                                Dynamics 365 Consulting Services
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49278">
                                                    <a href="#/technology-solutions/oracle/netsuite/">
                                                        NetSuite                                                Consulting Services
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49279">
                                                    <a href="#/technology-solutions/salesforce-consulting-services/">
                                                        Salesforce                                                Consulting Services
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-46020-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/technology-solutions/it-strategy/">
                                                    IT                                            Strategy
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-49284">
                                                    <a href="#/technology-solutions/it-strategy/">
                                                        Application                                                Rationalization
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49282">
                                                    <a href="#/technology-solutions/it-strategy/cio-services/">
                                                        CIO                                                Mentoring / Interim CIO
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-46021">
                                                    <a href="#/technology-solutions/it-strategy/cio-services/">
                                                        CIO                                                Services
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49280">
                                                    <a href="#/technology-solutions/cybersecurity-consulting-services/">
                                                        Cybersecurity
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49281">
                                                    <a href="#/digital-transformation-consulting/">
                                                        Digital                                                Transformation
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-46022">
                                                    <a href="#/technology-solutions/it-strategy/enterprise-architecture/">
                                                        Enterprise                                                Architecture
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49283">
                                                    <a href="#/technology-solutions/it-strategy/">
                                                        IT                                                Strategy Development
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-46023-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/technology-solutions/modern-software-delivery/">
                                                    Modern                                            Software Delivery
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-46026">
                                                    <a href="#/technology-solutions/modern-software-delivery/agile-transformation-consulting/">
                                                        Agile                                                Transformation
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-46028">
                                                    <a href="#/technology-solutions/modern-software-delivery/cloud-solutions/">
                                                        Cloud                                                Solutions
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-46029">
                                                    <a href="#/technology-solutions/modern-software-delivery/custom-application-development/">
                                                        Custom                                                Application Development
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-46024">
                                                    <a href="#/technology-solutions/modern-software-delivery/devops/">
                                                        DevOps
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-46025">
                                                    <a href="#/technology-solutions/modern-software-delivery/software-quality-assurance-testing/">
                                                        Software                                                Quality Assurance & Testing
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="menu-item-46205-pane"
                                        >
                                            <span className="tab-heading">
                                                <a href="#/technology-solutions/modern-workplace/">
                                                    Modern                                            Workplace
                                                </a>
                                            </span>
                                            <ul className="nav">
                                                <li className="menu-item menu-item-46018">
                                                    <a href="#/technology-solutions/modern-workplace/microsoft-adoption-and-change-management/">
                                                        Microsoft                                                Adoption and Change Management
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-46012">
                                                    <a href="#/technology-solutions/modern-workplace/microsoft-teams-consulting/">
                                                        Microsoft                                                Teams
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-46014">
                                                    <a href="#/technology-solutions/modern-workplace/microsoft-power-platform-for-low-code-and-no-code-solutions/">
                                                        Microsoft                                                Power Platform
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49053">
                                                    <a href="#/technology-solutions/modern-workplace/microsoft-365-managed-services/">
                                                        Microsoft                                                365 Managed Services
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49055">
                                                    <a href="#/technology-solutions/modern-workplace/">
                                                        Microsoft                                                365 Migration Services
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-49049">
                                                    <a href="#/technology-solutions/modern-workplace/microsoft-office-365-security-and-compliance/">
                                                        Microsoft                                                & Office 365 Security and Compliance
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="features">
                                        <span>
                                            Features and beyond
                                        </span>
                                        <div className="feature">
                                            <a
                                                className="stretched-link"
                                                href="#/resources/ready-to-automate-the-best-processes-for-automation-identification-scorecard/?utm_source=MegMenuTechSLFeatute&utm_medium=Website&utm_campaign=EnterpriseAutomation&utm_content=AutomationScorecard"
                                            >
                                                Ready To Automate?{' '}
                                            </a>
                                            <p>
                                                Assessment: Knowing which processes to automate can be tricky. Download our                                        interactive RPA scorecard to help determine if your processes are ready for                                        automation.
                                            </p>
                                        </div>
                                        <div className="feature">
                                            <a
                                                className="stretched-link"
                                                href="#/ub_nat_ai_agents_wbnr/"
                                            >
                                                Go Beyond ChatGPT with AI Agents
                                            </a>
                                            <p>
                                                In this on-demand webinar, we will explore what AI agents are capable of – and                                        how they’re poised to bring significant productivity gains, cost savings, and                                        enhanced capabilities to your business.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                           
                           
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-46211 dropdown">
                                <Link to='/insights'
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    tabIndex="0"
                                >
                                    Insights
                                </Link>
                                
                            </li>
                            
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46048 dropdown">
                                <Link to='/about'
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    tabIndex="0"
                                >
                                    About Us
                                </Link>

                                    
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46051 dropdown">
                                <a
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    tabIndex="0"
                                >
                                    Careers
                                </a>
                                
                            </li>
                            <li className="btn btn-primary menu-item menu-item-type-post_type menu-item-object-page menu-item-46057">
                                <Link to=''
                                    className=""
                                    data-ps2id-api="true"
                                    href="#/contact/"
                                    target="_self"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div
                        className="collapse"
                        id="mobile-navigation"
                    >
                        <ul
                            className="nav navbar-nav"
                            id="menu-mega-menu-1"
                        >
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span className="panel-title">
                                        <a href="#/business-consulting/">
                                            Business                                    Consulting
                                        </a>
                                    </span>
                                    <a
                                        data-parent="#accordion"
                                        data-toggle="collapse"
                                        href="#collapse45941"
                                    >
                                        <svg
                                            height="1em"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </a>
                                </div>
                                <div
                                    className="panel-collapse collapse"
                                    id="collapse45941"
                                >
                                    <div className="panel-body">
                                        <div className="panel-group">
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/business-consulting/enterprise-portfolio-and-program-management-consulting/">
                                                            Enterprise                                                    Portfolio and Program Management
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse45998"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse45998"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/enterprise-portfolio-and-program-management-consulting/strategic-portfolio-management-consulting/"
                                                            >
                                                                Strategic                                                        Portfolio Management
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/enterprise-portfolio-and-program-management-consulting/pmo-consulting/"
                                                            >
                                                                PMO                                                        Consulting
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/enterprise-portfolio-and-program-management-consulting/pmo-as-a-service/"
                                                            >
                                                                PMO                                                        as a Service
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/business-consulting/experience-design/">
                                                            Experience                                                    Design
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse48779"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse48779"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/experience-design/customer-experience-design/"
                                                            >
                                                                Customer                                                        Experience Design
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/experience-design/customer-experience-research-discovery/"
                                                            >
                                                                Customer                                                        Experience Research & Discovery
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/experience-design/digital-design/"
                                                            >
                                                                Digital                                                        Design
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/business-consulting/human-capital-management-workforce-management/">
                                                            Human                                                    Capital Management / Workforce Management
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46190"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46190"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/business-consulting/human-capital-management-workforce-management/"
                                                            >
                                                                HCM/WFM                                                        Strategy
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/business-consulting/human-capital-management-workforce-management/"
                                                            >
                                                                HCM/WFM                                                        Deployment & Optimization
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/business-consulting/human-capital-management-workforce-management/"
                                                            >
                                                                HCM/WFM                                                        Systems Operations
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/business-consulting/human-capital-management-workforce-management/"
                                                            >
                                                                symplr
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/business-consulting/human-capital-management-workforce-management/"
                                                            >
                                                                UKG
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/business-consulting/human-capital-management-workforce-management/"
                                                            >
                                                                Workday
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/business-consulting/operational-excellence-consulting/">
                                                            Operational                                                    Excellence Consulting
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse45950"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse45950"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/operational-excellence-consulting/business-process-improvement-consulting/"
                                                            >
                                                                Business                                                        Process Improvement
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/operational-excellence-consulting/business-process-management-bpm/"
                                                            >
                                                                Business                                                        Process Management
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/operational-excellence-consulting/centers-of-process-excellence-consulting/"
                                                            >
                                                                Centers                                                        of Process Excellence
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/enterprise-automation-services/"
                                                            >
                                                                Enterprise                                                        Automation
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/operational-excellence-consulting/supply-chain-operations-consulting/"
                                                            >
                                                                Supply                                                        Chain Operations
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/business-consulting/people-and-change-consulting/">
                                                            People                                                    and Change
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse45993"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse45993"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/people-and-change-consulting/organizational-change-management/"
                                                            >
                                                                Change                                                        Management
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/people-and-change-consulting/enterprise-change-management/"
                                                            >
                                                                Enterprise                                                        Change Management
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/people-and-change-consulting/hybrid-workplace-strategy/"
                                                            >
                                                                Hybrid                                                        Workplace Strategy
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/business-consulting/strategy-alignment-and-architecture/">
                                                            Strategy                                                    Alignment and Architecture
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse45939"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse45939"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/strategy-alignment-and-architecture/business-architecture/"
                                                            >
                                                                Business                                                        Architecture
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/strategy-alignment-and-architecture/business-transformation-consulting/"
                                                            >
                                                                Business                                                        Transformation
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/strategy-alignment-and-architecture/executive-advisory-services/"
                                                            >
                                                                Executive                                                        Advisory Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/strategy-alignment-and-architecture/mergers-acquisitions-and-divestitures-consulting/"
                                                            >
                                                                Mergers,                                                        Acquisitions and Divestitures
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/strategy-alignment-and-architecture/stratatecture/"
                                                            >
                                                                StratATecture
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span className="panel-title">
                                        <a href="#/technology-solutions/">
                                            Technology                                    Consulting
                                        </a>
                                    </span>
                                    <a
                                        data-parent="#accordion"
                                        data-toggle="collapse"
                                        href="#collapse45910"
                                    >
                                        <svg
                                            height="1em"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </a>
                                </div>
                                <div
                                    className="panel-collapse collapse"
                                    id="collapse45910"
                                >
                                    <div className="panel-body">
                                        <div className="panel-group">
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/artificial-intelligence-consulting/">
                                                            Artificial                                                    Intelligence
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46180"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46180"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/artificial-intelligence-consulting/"
                                                            >
                                                                AI                                                        Strategic Planning, Governance and Security
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/artificial-intelligence-consulting/"
                                                            >
                                                                Enterprise                                                        Intelligence and Analytics
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/artificial-intelligence-consulting/"
                                                            >
                                                                AI                                                        Innovation
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/artificial-intelligence-consulting/"
                                                            >
                                                                Quick                                                        Start AI
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/crm-consulting-services/">
                                                            Customer                                                    Relationship Management
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46185"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46185"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/enterprise-resource-planning/microsoft-dynamics-365-consulting/"
                                                            >
                                                                Dynamics                                                        365
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/oracle/netsuite/"
                                                            >
                                                                NetSuite
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/salesforce-consulting-services/"
                                                            >
                                                                Salesforce
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/cybersecurity-consulting-services/">
                                                            Cybersecurity
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46187"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46187"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/cybersecurity-consulting-services/"
                                                            >
                                                                Audit                                                        & Assurance
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/cybersecurity-consulting-services/governance-risk-and-compliance-services/"
                                                            >
                                                                Governance                                                        Risk & Compliance
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/cybersecurity-consulting-services/penetration-testing-services/"
                                                            >
                                                                Penetration                                                        Testing Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/cybersecurity-consulting-services/"
                                                            >
                                                                Identity                                                        Access Management (IAM)
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/cybersecurity-consulting-services/"
                                                            >
                                                                Secure                                                        Work Environment
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/cybersecurity-consulting-services/virtual-ciso-services/"
                                                            >
                                                                Virtual                                                        CISO Services & Cybersecurity Strategy
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                href="#/digital-transformation-consulting/"
                                            >
                                                Digital                                        Transformation
                                            </a>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/data-analytics/">
                                                            Data                                                    & Analytics
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse45911"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse45911"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/data-analytics/data-governance/"
                                                            >
                                                                Data                                                        Governance
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/data-analytics/data-modernization-services/"
                                                            >
                                                                Data                                                        Modernization Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/data-analytics/data-strategy/"
                                                            >
                                                                Data                                                        Strategy
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/data-analytics/machine-learning-consulting/"
                                                            >
                                                                Machine                                                        Learning Consulting
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/data-analytics/data-visualizations-and-insights/"
                                                            >
                                                                Visualization                                                        & Insights
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/enterprise-automation-services/">
                                                            Enterprise                                                    Automation
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46200"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46200"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/enterprise-automation-services/"
                                                            >
                                                                Automation                                                        Governance
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/operational-excellence-consulting/business-process-management-bpm/"
                                                            >
                                                                Business                                                        Process Management
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/business-consulting/operational-excellence-consulting/robotic-process-automation-consulting/"
                                                            >
                                                                Robotic                                                        Process Automation
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/enterprise-resource-planning/">
                                                            Enterprise                                                    Resource Planning
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46009"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46009"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/enterprise-resource-planning/microsoft-dynamics-365-consulting/"
                                                            >
                                                                Microsoft                                                        Dynamics 365 Consulting Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/oracle/netsuite/"
                                                            >
                                                                NetSuite                                                        Consulting Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/salesforce-consulting-services/"
                                                            >
                                                                Salesforce                                                        Consulting Services
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/it-strategy/">
                                                            IT                                                    Strategy
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46020"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46020"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/it-strategy/"
                                                            >
                                                                Application                                                        Rationalization
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/it-strategy/cio-services/"
                                                            >
                                                                CIO                                                        Mentoring / Interim CIO
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/it-strategy/cio-services/"
                                                            >
                                                                CIO                                                        Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/cybersecurity-consulting-services/"
                                                            >
                                                                Cybersecurity
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/digital-transformation-consulting/"
                                                            >
                                                                Digital                                                        Transformation
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/it-strategy/enterprise-architecture/"
                                                            >
                                                                Enterprise                                                        Architecture
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/it-strategy/"
                                                            >
                                                                IT                                                        Strategy Development
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/modern-software-delivery/">
                                                            Modern                                                    Software Delivery
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46023"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46023"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-software-delivery/agile-transformation-consulting/"
                                                            >
                                                                Agile                                                        Transformation
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-software-delivery/cloud-solutions/"
                                                            >
                                                                Cloud                                                        Solutions
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-software-delivery/custom-application-development/"
                                                            >
                                                                Custom                                                        Application Development
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-software-delivery/devops/"
                                                            >
                                                                DevOps
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-software-delivery/software-quality-assurance-testing/"
                                                            >
                                                                Software                                                        Quality Assurance & Testing
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/modern-workplace/">
                                                            Modern                                                    Workplace
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46205"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46205"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-workplace/microsoft-adoption-and-change-management/"
                                                            >
                                                                Microsoft                                                        Adoption and Change Management
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-workplace/microsoft-teams-consulting/"
                                                            >
                                                                Microsoft                                                        Teams
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-workplace/microsoft-power-platform-for-low-code-and-no-code-solutions/"
                                                            >
                                                                Microsoft                                                        Power Platform
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-workplace/microsoft-365-managed-services/"
                                                            >
                                                                Microsoft                                                        365 Managed Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/modern-workplace/"
                                                            >
                                                                Microsoft                                                        365 Migration Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-workplace/microsoft-office-365-security-and-compliance/"
                                                            >
                                                                Microsoft                                                        & Office 365 Security and Compliance
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span className="panel-title">
                                        <a href="">
                                            Tech Platforms
                                        </a>
                                    </span>
                                    <a
                                        data-parent="#accordion"
                                        data-toggle="collapse"
                                        href="#collapse46031"
                                    >
                                        <svg
                                            height="1em"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </a>
                                </div>
                                <div
                                    className="panel-collapse collapse"
                                    id="collapse46031"
                                >
                                    <div className="panel-body">
                                        <div className="panel-group">
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/microsoft/">
                                                            Microsoft
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46193"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46193"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-software-delivery/cloud-solutions/microsoft-azure-services/"
                                                            >
                                                                Azure
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/microsoft/microsoft-copilot-consulting/"
                                                            >
                                                                Copilot
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/enterprise-resource-planning/microsoft-dynamics-365-consulting/"
                                                            >
                                                                Dynamics                                                        365
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/microsoft/microsoft-licensing-consulting/"
                                                            >
                                                                Licensing
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-workplace/microsoft-power-platform-for-low-code-and-no-code-solutions/"
                                                            >
                                                                Power                                                        Platform
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/modern-workplace/microsoft-teams-consulting/"
                                                            >
                                                                Teams
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/salesforce-consulting-services/">
                                                            Salesforce
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46194"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46194"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/salesforce-consulting-services/salesforce-ai-consulting/"
                                                            >
                                                                Salesforce                                                        AI Consulting
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/salesforce-consulting-services/salesforce-sales-cloud/salesforce-assessments/"
                                                            >
                                                                Assessments
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/salesforce-implementation-services/"
                                                            >
                                                                Implementation                                                        Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/salesforce-consulting-services/salesforce-marketing-cloud/"
                                                            >
                                                                Marketing                                                        Cloud
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/salesforce-consulting-services/salesforce-marketing-cloud-account-engagement-pardot/"
                                                            >
                                                                Pardot
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/salesforce-consulting-services/salesforce-for-nonprofits/"
                                                            >
                                                                Nonprofits
                                                            </a>
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/salesforce-consulting-services/salesforce-sales-cloud/"
                                                            >
                                                                Sales                                                        Cloud
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/technology-solutions/salesforce-consulting-services/salesforce-services-cloud/"
                                                            >
                                                                Service                                                        Cloud
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                                href="#/salesforce-tableau/"
                                                            >
                                                                Tableau
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                href="#/technology-solutions/oracle/"
                                            >
                                                Oracle
                                            </a>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <span className="panel-title">
                                                        <a href="#/technology-solutions/oracle/netsuite/">
                                                            NetSuite
                                                        </a>
                                                    </span>
                                                    <a
                                                        data-parent="#accordion"
                                                        data-toggle="collapse"
                                                        href="#collapse46196"
                                                    >
                                                        <svg
                                                            height="1em"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div
                                                    className="panel-collapse collapse"
                                                    id="collapse46196"
                                                >
                                                    <div className="panel-body">
                                                        <div className="panel-group">
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/oracle/netsuite/"
                                                            >
                                                                Advisory                                                        Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/oracle/netsuite/"
                                                            >
                                                                Implementation                                                        Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/oracle/netsuite/"
                                                            >
                                                                Managed                                                        Services
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/oracle/netsuite/"
                                                            >
                                                                NetSuite                                                        Accounting
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/oracle/netsuite/"
                                                            >
                                                                NetSuite                                                        Commerce
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/oracle/netsuite/"
                                                            >
                                                                NetSuite                                                        CRM
                                                            </a>
                                                            {' '}
                                                            <a
                                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                                href="#/technology-solutions/oracle/netsuite/"
                                                            >
                                                                NetSuite                                                        ERP
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span className="panel-title">
                                        <a href="#/industries/">
                                            Industries
                                        </a>
                                    </span>
                                    <a
                                        data-parent="#accordion"
                                        data-toggle="collapse"
                                        href="#collapse46032"
                                    >
                                        <svg
                                            height="1em"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </a>
                                </div>
                                <div
                                    className="panel-collapse collapse"
                                    id="collapse46032"
                                >
                                    <div className="panel-body">
                                        <div className="panel-group">
                                            <a
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                href="#/industries/energy-and-utilities/"
                                            >
                                                Energy and                                        Utilities
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                href="#/industries/financial-services/"
                                            >
                                                Financial                                        Services
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                href="#/industries/healthcare/"
                                            >
                                                Healthcare and Life                                        Sciences
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                href="#/industries/insurance/"
                                            >
                                                Insurance
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                href="#/industries/public-sector-consulting-services/"
                                            >
                                                Public                                        Sector
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span className="panel-title">
                                        <Link  to='insights'>
                                            Insights
                                        </Link>
                                    </span>
                                    <a
                                        data-parent="#accordion"
                                        data-toggle="collapse"
                                        href="#collapse46211"
                                    >
                                        <svg
                                            height="1em"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </a>
                                </div>
                                <div
                                    className="panel-collapse collapse"
                                    id="collapse46211"
                                >
                                    <div className="panel-body">
                                        <div className="panel-group">
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="/resource-categories/blogs/"
                                            >
                                                Blogs
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="/resource-categories/webinars/"
                                            >
                                                On Demand Webinars
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="/resource-categories/ebooks-white-papers/"
                                            >
                                                White Papers & Ebooks
                                            </a>
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="/resource-categories/podcasts/"
                                            >
                                                Podcasts
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span className="panel-title">
                                        <a href="/news-and-events/">
                                            News &                                    Events
                                        </a>
                                    </span>
                                    <a
                                        data-parent="#accordion"
                                        data-toggle="collapse"
                                        href="#collapse46054"
                                    >
                                        <svg
                                            height="1em"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </a>
                                </div>
                                <div
                                    className="panel-collapse collapse"
                                    id="collapse46054"
                                >
                                    <div className="panel-body">
                                        <div className="panel-group">
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="#/news-and-events-category/accolades/"
                                            >
                                                Accolades
                                            </a>
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="#/news-and-events-category/events/"
                                            >
                                                Events
                                            </a>
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="#/news-and-events-category/in-the-media/"
                                            >
                                                In                                        The Media
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="/news-and-events-category/news/"
                                            >
                                                News
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="#/news-and-events-category/webinars/"
                                            >
                                                Webinars
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span className="panel-title">
                                        <a href="#/about-us/">
                                            About Us
                                        </a>
                                    </span>
                                    <a
                                        data-parent="#accordion"
                                        data-toggle="collapse"
                                        href="#collapse46048"
                                    >
                                        <svg
                                            height="1em"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </a>
                                </div>
                                <div
                                    className="panel-collapse collapse"
                                    id="collapse46048"
                                >
                                    <div className="panel-body">
                                        <div className="panel-group">
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="#/about-us/"
                                            >
                                                Who We Are
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="/resource-categories/client-stories/"
                                            >
                                                Client Stories
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="/partners/"
                                            >
                                                Partners
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="/locations/"
                                            >
                                                Locations
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span className="panel-title">
                                        <a href="#/about-us/careers/">
                                            Careers
                                        </a>
                                    </span>
                                    <a
                                        data-parent="#accordion"
                                        data-toggle="collapse"
                                        href="#collapse46051"
                                    >
                                        <svg
                                            height="1em"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-137.4 137.4-137.4-137.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </a>
                                </div>
                                <div
                                    className="panel-collapse collapse"
                                    id="collapse46051"
                                >
                                    <div className="panel-body">
                                        <div className="panel-group">
                                            <a
                                                className="menu-item menu-item-type-custom menu-item-object-custom"
                                                href="#/careers-resources/"
                                            >
                                                Culture & Career                                        Stories
                                            </a>
                                            {' '}
                                            <a
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                                href="#/about-us/diversity-and-inclusion/"
                                            >
                                                Diversity                                        and Inclusion
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="btn btn-primary menu-item menu-item-type-post_type menu-item-object-page"
                                href="#/contact/"
                            >
                                Contact Us
                            </a>
                        </ul>
                    </div>
                </nav>
  )
}
