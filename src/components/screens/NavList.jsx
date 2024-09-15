import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function NavList({ props }) {
    const navigate = useNavigate();
    return (

        <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item current_page_item menu-item-has-children dropdown"> <Link to='/'
            aria-expanded="false"
            aria-haspopup="true"
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            tabIndex="0"
        >
            {props}
        </Link>
        </li>






    )
}






// <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown">
// <Link to='/about'
//     aria-expanded="false"
//     aria-haspopup="true"
//     className="dropdown-toggle"
//     data-toggle="dropdown"
//     role="button"
//     tabIndex="0"
// >
//     About Us
// </Link>


// </li>




// <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item current_page_item menu-item-has-children dropdown">
// <Link to='/'
//     aria-expanded="false"
//     aria-haspopup="true"
//     className="dropdown-toggle"
//     data-toggle="dropdown"
//     role="button"
//     tabIndex="0"
// >
//     Home
// </Link> </li>
// <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item current_page_item menu-item-has-children dropdown">
// <Link to='/services'
//     aria-expanded="false"
//     aria-haspopup="true"
//     className="dropdown-toggle"
//     data-toggle="dropdown"
//     role="button"
//     tabIndex="0"
// >
//     Services
// </Link>
// {/* <div className="dropdown-menu">
// <div className="wrapper">
// <div className="item-meta">
//     <span className="item-heading">
//         <a href="">
//             Our                                            Services
//         </a>
//     </span>
//     <p className="item-desc" />
// </div>
// <ul className="nav nav-tabs">
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45998">
//         <a
//             data-toggle="tab"
//             href="#menu-item-45998-pane"
//         >
//             Advisory
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-48779">
//         <a
//             data-toggle="tab"
//             href="#menu-item-48779-pane"
//         >
//             Audit and Assurance
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46190">
//         <a
//             data-toggle="tab"
//             href="#menu-item-46190-pane"
//         >
//             Consulting
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45950">
//         <a
//             data-toggle="tab"
//             href="#menu-item-45950-pane"
//         >
//             Environmental, social and governance
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45993">
//         <a
//             data-toggle="tab"
//             href="#menu-item-45993-pane"
//         >
//             People and Change
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45939">
//         <a
//             data-toggle="tab"
//             href="#menu-item-45939-pane"
//         >
//          Financial services advisory
//         </a>
//     </li>
// </ul>
// </div>
// <div className="tab-content">
// <div
//     className="tab-pane "
//     id="menu-item-45998-pane"
// >
//     <span className="tab-heading">
//         <a href="#">
//             Enterprise                                            Portfolio and Program Management
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-47739">
//             <a href="#">
//                 Strategic                                                Portfolio Management
//             </a>
//         </li>
//         <li className="menu-item menu-item-47740">
//             <a href="#">
//                 PMO                                                Consulting
//             </a>
//         </li>
//         <li className="menu-item menu-item-47741">
//             <a href="#">
//                 PMO                                                as a Service
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-48779-pane"
// >
//     <span className="tab-heading">
//         <a href="#">
//             Experience                                            Design
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-51047">
//             <a href="#">
//                 Customer                                                Experience Design
//             </a>
//         </li>
//         <li className="menu-item menu-item-48756">
//             <a href="#">
//                 Customer                                                Experience Research & Discovery
//             </a>
//         </li>
//         <li className="menu-item menu-item-48755">
//             <a href="#">
//                 Digital                                                Design
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-46190-pane"
// >
//     <span className="tab-heading">
//         <a href="#/business-consulting/human-capital-management-workforce-management/">
//             Human                                            Capital Management / Workforce Management
//         </a>
//     </span>
//     <p className="tab-description">
//         We help clients transform and manage their human capital                                        technologies, processes and operations for long-term success.
//     </p>
//     <ul className="nav">
//         <li className="menu-item menu-item-49285">
//             <a href="#/business-consulting/human-capital-management-workforce-management/">
//                 HCM/WFM                                                Strategy
//             </a>
//         </li>
//         <li className="menu-item menu-item-49286">
//             <a href="#/business-consulting/human-capital-management-workforce-management/">
//                 HCM/WFM                                                Deployment & Optimization
//             </a>
//         </li>
//         <li className="menu-item menu-item-49287">
//             <a href="#/business-consulting/human-capital-management-workforce-management/">
//                 HCM/WFM                                                Systems Operations
//             </a>
//         </li>
//         <li className="menu-item menu-item-49290">
//             <a href="#/business-consulting/human-capital-management-workforce-management/">
//                 symplr
//             </a>
//         </li>
//         <li className="menu-item menu-item-49289">
//             <a href="#/business-consulting/human-capital-management-workforce-management/">
//                 UKG
//             </a>
//         </li>
//         <li className="menu-item menu-item-49288">
//             <a href="#/business-consulting/human-capital-management-workforce-management/">
//                 Workday
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-45950-pane"
// >
//     <span className="tab-heading">
//         <a href="#/business-consulting/operational-excellence-consulting/">
//             Operational                                            Excellence Consulting
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-49468">
//             <a href="#/business-consulting/operational-excellence-consulting/business-process-improvement-consulting/">
//                 Business                                                Process Improvement
//             </a>
//         </li>
//         <li className="menu-item menu-item-45968">
//             <a href="#/business-consulting/operational-excellence-consulting/business-process-management-bpm/">
//                 Business                                                Process Management
//             </a>
//         </li>
//         <li className="menu-item menu-item-49520">
//             <a href="#/business-consulting/operational-excellence-consulting/centers-of-process-excellence-consulting/">
//                 Centers                                                of Process Excellence
//             </a>
//         </li>
//         <li className="menu-item menu-item-48394">
//             <a href="#/technology-solutions/enterprise-automation-services/">
//                 Enterprise                                                Automation
//             </a>
//         </li>
//         <li className="menu-item menu-item-45963">
//             <a href="#/business-consulting/operational-excellence-consulting/supply-chain-operations-consulting/">
//                 Supply                                                Chain Operations
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-45993-pane"
// >
//     <span className="tab-heading">
//         <a href="#/business-consulting/people-and-change-consulting/">
//             People                                            and Change
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-45995">
//             <a href="#/business-consulting/people-and-change-consulting/organizational-change-management/">
//                 Change                                                Management
//             </a>
//         </li>
//         <li className="menu-item menu-item-45997">
//             <a href="#/business-consulting/people-and-change-consulting/enterprise-change-management/">
//                 Enterprise                                                Change Management
//             </a>
//         </li>
//         <li className="menu-item menu-item-45996">
//             <a href="#/business-consulting/people-and-change-consulting/hybrid-workplace-strategy/">
//                 Hybrid                                                Workplace Strategy
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-45939-pane"
// >
//     <span className="tab-heading">
//         <a href="#/business-consulting/strategy-alignment-and-architecture/">
//             Strategy                                            Alignment and Architecture
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-45959">
//             <a href="#/business-consulting/strategy-alignment-and-architecture/business-architecture/">
//                 Business                                                Architecture
//             </a>
//         </li>
//         <li className="menu-item menu-item-45948">
//             <a href="#/business-consulting/strategy-alignment-and-architecture/business-transformation-consulting/">
//                 Business                                                Transformation
//             </a>
//         </li>
//         <li className="menu-item menu-item-45945">
//             <a href="#/business-consulting/strategy-alignment-and-architecture/executive-advisory-services/">
//                 Executive                                                Advisory Services
//             </a>
//         </li>
//         <li className="menu-item menu-item-45946">
//             <a href="#/business-consulting/strategy-alignment-and-architecture/mergers-acquisitions-and-divestitures-consulting/">
//                 Mergers,                                                Acquisitions and Divestitures
//             </a>
//         </li>
//         <li className="menu-item menu-item-45947">
//             <a href="#/business-consulting/strategy-alignment-and-architecture/stratatecture/">
//                 StratATecture
//             </a>
//         </li>
//     </ul>
// </div>
// </div>
// <div className="features">
// <span>
//     Features and beyond
// </span>
// <div className="feature">
//     <a
//         className="stretched-link"
//         href="#/ub/ctnt_accelerating_strategy_execution_eppm_white_paper/?source=website"
//     >
//         Improve Your PMO
//     </a>
//     <p>
//         White Paper: Learn 5 approaches to execute strategy and elevate your project                                        management office.{' '}
//     </p>
// </div>
// <div className="feature">
//     <a
//         className="stretched-link"
//         href="#/checklist/ub-enterprise-automation-rpa-and-bpm/"
//     >
//         What's Your Automation Maturity?
//     </a>
//     <p>
//         Assessment: Learn how to take your automation efforts up a notch based on what                                        you're doing currently.{' '}
//     </p>
// </div>
// </div>
// </div> */}
// </li>
// <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown">
// <Link to='/industries'
//     aria-expanded="false"
//     aria-haspopup="true"
//     className="dropdown-toggle"
//     data-toggle="dropdown"
//     role="button"
//     tabIndex="0"
// >
//     Industries
// </Link>
// {/* <div className="dropdown-menu">
// <div className="wrapper">
// <div className="item-meta">
//     <span className="item-heading">
//         <a href="#/technology-solutions/">
//             Industries
//         </a>
//     </span>
//     <p className="item-desc" />
// </div>
// <ul className="nav nav-tabs">
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46180">
//         <a
//             data-toggle="tab"
//             href="#menu-item-46180-pane"
//         >
//             Artificial Intelligence
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46185">
//         <a
//             data-toggle="tab"
//             href="#menu-item-46185-pane"
//         >
//             Customer Relationship                                            Management
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46187">
//         <a
//             data-toggle="tab"
//             href="#menu-item-46187-pane"
//         >
//             Cybersecurity
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46003">
//         <a
//             data-toggle="tab"
//             href="#menu-item-46003-pane"
//         >
//             Digital Transformation
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45911">
//         <a
//             data-toggle="tab"
//             href="#menu-item-45911-pane"
//         >
//             Data & Analytics
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46200">
//         <a
//             data-toggle="tab"
//             href="#menu-item-46200-pane"
//         >
//             Enterprise Automation
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46009">
//         <a
//             data-toggle="tab"
//             href="#menu-item-46009-pane"
//         >
//             Enterprise Resource                                            Planning
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46020">
//         <a
//             data-toggle="tab"
//             href="#menu-item-46020-pane"
//         >
//             IT Strategy
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46023">
//         <a
//             data-toggle="tab"
//             href="#menu-item-46023-pane"
//         >
//             Modern Software Delivery
//         </a>
//     </li>
//     <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46205">
//         <a
//             data-toggle="tab"
//             href="#menu-item-46205-pane"
//         >
//             Modern Workplace
//         </a>
//     </li>
// </ul>
// </div>
// <div className="tab-content">
// <div
//     className="tab-pane "
//     id="menu-item-46180-pane"
// >
//     <span className="tab-heading">
//         <a href="#/technology-solutions/artificial-intelligence-consulting/">
//             Artificial                                            Intelligence
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-49078">
//             <a href="#/technology-solutions/artificial-intelligence-consulting/">
//                 AI                                                Strategic Planning, Governance and Security
//             </a>
//         </li>
//         <li className="menu-item menu-item-49079">
//             <a href="#/technology-solutions/artificial-intelligence-consulting/">
//                 Enterprise                                                Intelligence and Analytics
//             </a>
//         </li>
//         <li className="menu-item menu-item-49080">
//             <a href="#/technology-solutions/artificial-intelligence-consulting/">
//                 AI                                                Innovation
//             </a>
//         </li>
//         <li className="menu-item menu-item-49081">
//             <a href="#/technology-solutions/artificial-intelligence-consulting/">
//                 Quick                                                Start AI
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-46185-pane"
// >
//     <span className="tab-heading">
//         <a href="#/technology-solutions/crm-consulting-services/">
//             Customer                                            Relationship Management
//         </a>
//     </span>
//     <p className="tab-description">
//         Engage your prospects and customers to drive business                                        outcomes and provide better experiences.
//     </p>
//     <ul className="nav">
//         <li className="menu-item menu-item-49268">
//             <a href="#/technology-solutions/enterprise-resource-planning/microsoft-dynamics-365-consulting/">
//                 Dynamics                                                365
//             </a>
//         </li>
//         <li className="menu-item menu-item-49270">
//             <a href="#/technology-solutions/oracle/netsuite/">
//                 NetSuite
//             </a>
//         </li>
//         <li className="menu-item menu-item-49269">
//             <a href="#/technology-solutions/salesforce-consulting-services/">
//                 Salesforce
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-46187-pane"
// >
//     <span className="tab-heading">
//         <a href="#/technology-solutions/cybersecurity-consulting-services/">
//             Cybersecurity
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-49073">
//             <a href="#/technology-solutions/cybersecurity-consulting-services/">
//                 Audit                                                & Assurance
//             </a>
//         </li>
//         <li className="menu-item menu-item-49074">
//             <a href="#/technology-solutions/cybersecurity-consulting-services/governance-risk-and-compliance-services/">
//                 Governance                                                Risk & Compliance
//             </a>
//         </li>
//         <li className="menu-item menu-item-51101">
//             <a href="#/technology-solutions/cybersecurity-consulting-services/penetration-testing-services/">
//                 Penetration                                                Testing Services
//             </a>
//         </li>
//         <li className="menu-item menu-item-49075">
//             <a href="#/technology-solutions/cybersecurity-consulting-services/">
//                 Identity                                                Access Management (IAM)
//             </a>
//         </li>
//         <li className="menu-item menu-item-49076">
//             <a href="#/technology-solutions/cybersecurity-consulting-services/">
//                 Secure                                                Work Environment
//             </a>
//         </li>
//         <li className="menu-item menu-item-51317">
//             <a href="#/technology-solutions/cybersecurity-consulting-services/virtual-ciso-services/">
//                 Virtual                                                CISO Services & Cybersecurity Strategy
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-46003-pane"
// >
//     <span className="tab-heading">
//         <a href="#/digital-transformation-consulting/">
//             Digital                                            Transformation
//         </a>
//     </span>
//     <p className="tab-description">
//         Digitally enabling your business functions for the                                        technology world of the 21st century.
//     </p>
//     <ul className="nav">
//     </ul>
// </div>
// <div
//     className="tab-pane"
//     id="menu-item-45911-pane"
// >
//     <span className="tab-heading">
//         <a href="#/technology-solutions/data-analytics/">
//             Data                                            & Analytics
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-45999">
//             <a href="#/technology-solutions/data-analytics/data-governance/">
//                 Data                                                Governance
//             </a>
//         </li>
//         <li className="menu-item menu-item-46000">
//             <a href="#/technology-solutions/data-analytics/data-modernization-services/">
//                 Data                                                Modernization Services
//             </a>
//         </li>
//         <li className="menu-item menu-item-46189">
//             <a href="#/technology-solutions/data-analytics/data-strategy/">
//                 Data                                                Strategy
//             </a>
//         </li>
//         <li className="menu-item menu-item-51054">
//             <a href="#/technology-solutions/data-analytics/machine-learning-consulting/">
//                 Machine                                                Learning Consulting
//             </a>
//         </li>
//         <li className="menu-item menu-item-49272">
//             <a href="#/technology-solutions/data-analytics/data-visualizations-and-insights/">
//                 Visualization                                                & Insights
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-46200-pane"
// >
//     <span className="tab-heading">
//         <a href="#/technology-solutions/enterprise-automation-services/">
//             Enterprise                                            Automation
//         </a>
//     </span>
//     <p className="tab-description">
//         If you’ve ever looked at a business process and thought                                        “there’s got to be a better way,” enterprise automation is the answer.
//     </p>
//     <ul className="nav">
//         <li className="menu-item menu-item-49275">
//             <a href="#/technology-solutions/enterprise-automation-services/">
//                 Automation                                                Governance
//             </a>
//         </li>
//         <li className="menu-item menu-item-49273">
//             <a href="#/business-consulting/operational-excellence-consulting/business-process-management-bpm/">
//                 Business                                                Process Management
//             </a>
//         </li>
//         <li className="menu-item menu-item-49274">
//             <a href="#/business-consulting/operational-excellence-consulting/robotic-process-automation-consulting/">
//                 Robotic                                                Process Automation
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-46009-pane"
// >
//     <span className="tab-heading">
//         <a href="#/technology-solutions/enterprise-resource-planning/">
//             Enterprise                                            Resource Planning
//         </a>
//     </span>
//     <p className="tab-description">
//         ERP implementations are always challenging. ​Whether                                        you’re interested in optimizing your current ERP platform, moving to the Cloud,                                        or considering your first implementation, we can help.
//     </p>
//     <ul className="nav">
//         <li className="menu-item menu-item-49277">
//             <a href="#/technology-solutions/enterprise-resource-planning/microsoft-dynamics-365-consulting/">
//                 Microsoft                                                Dynamics 365 Consulting Services
//             </a>
//         </li>
//         <li className="menu-item menu-item-49278">
//             <a href="#/technology-solutions/oracle/netsuite/">
//                 NetSuite                                                Consulting Services
//             </a>
//         </li>
//         <li className="menu-item menu-item-49279">
//             <a href="#/technology-solutions/salesforce-consulting-services/">
//                 Salesforce                                                Consulting Services
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-46020-pane"
// >
//     <span className="tab-heading">
//         <a href="#/technology-solutions/it-strategy/">
//             IT                                            Strategy
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-49284">
//             <a href="#/technology-solutions/it-strategy/">
//                 Application                                                Rationalization
//             </a>
//         </li>
//         <li className="menu-item menu-item-49282">
//             <a href="#/technology-solutions/it-strategy/cio-services/">
//                 CIO                                                Mentoring / Interim CIO
//             </a>
//         </li>
//         <li className="menu-item menu-item-46021">
//             <a href="#/technology-solutions/it-strategy/cio-services/">
//                 CIO                                                Services
//             </a>
//         </li>
//         <li className="menu-item menu-item-49280">
//             <a href="#/technology-solutions/cybersecurity-consulting-services/">
//                 Cybersecurity
//             </a>
//         </li>
//         <li className="menu-item menu-item-49281">
//             <a href="#/digital-transformation-consulting/">
//                 Digital                                                Transformation
//             </a>
//         </li>
//         <li className="menu-item menu-item-46022">
//             <a href="#/technology-solutions/it-strategy/enterprise-architecture/">
//                 Enterprise                                                Architecture
//             </a>
//         </li>
//         <li className="menu-item menu-item-49283">
//             <a href="#/technology-solutions/it-strategy/">
//                 IT                                                Strategy Development
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-46023-pane"
// >
//     <span className="tab-heading">
//         <a href="#/technology-solutions/modern-software-delivery/">
//             Modern                                            Software Delivery
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-46026">
//             <a href="#/technology-solutions/modern-software-delivery/agile-transformation-consulting/">
//                 Agile                                                Transformation
//             </a>
//         </li>
//         <li className="menu-item menu-item-46028">
//             <a href="#/technology-solutions/modern-software-delivery/cloud-solutions/">
//                 Cloud                                                Solutions
//             </a>
//         </li>
//         <li className="menu-item menu-item-46029">
//             <a href="#/technology-solutions/modern-software-delivery/custom-application-development/">
//                 Custom                                                Application Development
//             </a>
//         </li>
//         <li className="menu-item menu-item-46024">
//             <a href="#/technology-solutions/modern-software-delivery/devops/">
//                 DevOps
//             </a>
//         </li>
//         <li className="menu-item menu-item-46025">
//             <a href="#/technology-solutions/modern-software-delivery/software-quality-assurance-testing/">
//                 Software                                                Quality Assurance & Testing
//             </a>
//         </li>
//     </ul>
// </div>
// <div
//     className="tab-pane "
//     id="menu-item-46205-pane"
// >
//     <span className="tab-heading">
//         <a href="#/technology-solutions/modern-workplace/">
//             Modern                                            Workplace
//         </a>
//     </span>
//     <ul className="nav">
//         <li className="menu-item menu-item-46018">
//             <a href="#/technology-solutions/modern-workplace/microsoft-adoption-and-change-management/">
//                 Microsoft                                                Adoption and Change Management
//             </a>
//         </li>
//         <li className="menu-item menu-item-46012">
//             <a href="#/technology-solutions/modern-workplace/microsoft-teams-consulting/">
//                 Microsoft                                                Teams
//             </a>
//         </li>
//         <li className="menu-item menu-item-46014">
//             <a href="#/technology-solutions/modern-workplace/microsoft-power-platform-for-low-code-and-no-code-solutions/">
//                 Microsoft                                                Power Platform
//             </a>
//         </li>
//         <li className="menu-item menu-item-49053">
//             <a href="#/technology-solutions/modern-workplace/microsoft-365-managed-services/">
//                 Microsoft                                                365 Managed Services
//             </a>
//         </li>
//         <li className="menu-item menu-item-49055">
//             <a href="#/technology-solutions/modern-workplace/">
//                 Microsoft                                                365 Migration Services
//             </a>
//         </li>
//         <li className="menu-item menu-item-49049">
//             <a href="#/technology-solutions/modern-workplace/microsoft-office-365-security-and-compliance/">
//                 Microsoft                                                & Office 365 Security and Compliance
//             </a>
//         </li>
//     </ul>
// </div>
// </div>
// <div className="features">
// <span>
//     Features and beyond
// </span>
// <div className="feature">
//     <a
//         className="stretched-link"
//         href="#/resources/ready-to-automate-the-best-processes-for-automation-identification-scorecard/?utm_source=MegMenuTechSLFeatute&utm_medium=Website&utm_campaign=EnterpriseAutomation&utm_content=AutomationScorecard"
//     >
//         Ready To Automate?{' '}
//     </a>
//     <p>
//         Assessment: Knowing which processes to automate can be tricky. Download our                                        interactive RPA scorecard to help determine if your processes are ready for                                        automation.
//     </p>
// </div>
// <div className="feature">
//     <a
//         className="stretched-link"
//         href="#/ub_nat_ai_agents_wbnr/"
//     >
//         Go Beyond ChatGPT with AI Agents
//     </a>
//     <p>
//         In this on-demand webinar, we will explore what AI agents are capable of – and                                        how they’re poised to bring significant productivity gains, cost savings, and                                        enhanced capabilities to your business.
//     </p>
// </div>
// </div>
// </div> */}
// </li>
