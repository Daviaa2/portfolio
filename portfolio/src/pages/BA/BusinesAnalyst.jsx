import styles from "./BusinessAnalyst.module.css";

function BusinessAnalyst() {
  return (
    <>
      <header className={styles.header}>
        <h1>Business Analsyt Internship</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.overview}>
          <h1>🧩 Project Overview</h1>
          <p className={styles.paragraph}>
            As part of my Level 6 Business Analysis internship with Mission
            Ready HQ, I joined Lean Canvas, a Christchurch-based coworking and
            event space, as a Business Analyst Intern. My goal was to move the
            organization from fragmented, manual processes into streamlined,
            scalable digital systems using Agile and design thinking principles.
            The focus was on replacing the "scrappy" Google Sheets-based
            operations with a centralized ERP system (Odoo), while improving
            room bookings, onboarding, visitor management, marketing, and
            volunteer coordination.
          </p>
        </div>
        <div className={styles.statement}>
          <h1>❓ The Challenge</h1>
          <p className={styles.paragraph}>
            Lean Canvas operated using disconnected tools: spreadsheets for
            bookings, pen-and-paper visitor logs, interpersonal onboarding, and
            ad hoc messaging in Discord. This led to:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Frequent double bookings and poor visibility over space usage
            </li>
            <li className={styles.listItem}>
              Security and data privacy concerns
            </li>
            <li className={styles.listItem}>Limited marketing capabilities</li>
            <li className={styles.listItem}>
              Difficulty onboarding new clients and volunteers
            </li>
          </ul>
          <p className={styles.paragraph}>
            The overarching goal was to digitally transform core operational
            processes using tools already available in the business (Odoo ERP),
            while following the Lean philosophy of "Scrappy → Better → Best."
          </p>
        </div>
        <div className={styles.responsibilities}>
          <h1>🔍 My Role and Key Contributions</h1>
          <p className={styles.paragraph}>
            As the sole Business Analyst, I led the end-to-end analysis and
            solution design, collaborating directly with the founder,
            volunteers, and clients.
          </p>
          <h3 className={styles.subheading}>Key responsibilities</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Conducted stakeholder interviews and surveys
            </li>
            <li className={styles.listItem}>
              Mapped current state processes and identified inefficiencies
            </li>
            <li className={styles.listItem}>
              Applied Agile and design thinking frameworks to iterate solutions
            </li>
            <li className={styles.listItem}>
              Prototyped and tested tools including room booking systems,
              onboarding kits, and kiosks
            </li>
            <li className={styles.listItem}>
              Created documentation and onboarding resources for continuity
            </li>
          </ul>
          <h3 className={styles.subheading}>Solutions implemented</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Room Booking System – QR-based room reservation using Odoo
            </li>
            <li className={styles.listItem}>
              Volunteer Kanban Board – Visual task management (physical and
              online)
            </li>
            <li className={styles.listItem}>
              Digital Onboarding Kit – Centralized document with Discord/WiFi
              info, booking instructions, and facility map
            </li>
            <li className={styles.listItem}>
              POS and Front Desk Kiosks – Automated visitor sign-in and
              on-the-spot payment via browser-secure terminals
            </li>
            <li className={styles.listItem}>
              Email Campaign System – Contact-based outreach to promote events
              and generate leads
            </li>
            <li className={styles.listItem}>
              Event Management on Website – Added event hosting to the Lean
              Canvas site using Odoo's event app
            </li>
          </ul>
        </div>
        <div className={styles.deliverables}>
          <h1>📊 Tools & Techniques Used</h1>
          <p className={styles.paragraph}>
            Odoo ERP, Jira, Google Workspace, Discord, QR Code Generators,
            Microsoft Word, Surveys (Forms), Miro
          </p>
          <h3 className={styles.subheading}>Techniques & Frameworks</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Agile (Scrum sprints, Jira board, weekly standups)
            </li>
            <li className={styles.listItem}>
              Design Thinking (Empathize, Prototype, Test)
            </li>
            <li className={styles.listItem}>
              Stakeholder engagement & interviews
            </li>
            <li className={styles.listItem}>
              Process Mapping & Root Cause Analysis
            </li>
            <li className={styles.listItem}>
              Feasibility & competitor analysis
            </li>
            <li className={styles.listItem}>
              Documentation & training handovers
            </li>
          </ul>
        </div>
        <div className={styles.outcomes}>
          <h1>🤝 Stakeholder Engagement</h1>
          <p className={styles.paragraph}>
            I held weekly stakeholder meetings with the founder (Jim),
            facilitated group feedback sessions with volunteers, and conducted
            client interviews and surveys. My approach involved
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Practicing active listening and summarizing to confirm
              understanding
            </li>
            <li className={styles.listItem}>
              Using informal settings to gather honest insights
            </li>
            <li className={styles.listItem}>
              Validating priorities and solutions iteratively to avoid scope
              creep
            </li>
          </ul>
        </div>
        <div className={styles.reflection}>
          <h1>🎯 Key Outcomes & Achievements</h1>
          <p className={styles.paragraph}>
            This experience strengthened my ability to translate stakeholder
            needs into actionable insights and gave me firsthand exposure to
            Agile environments.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Improved operational efficiency through digitization of 5+ manual
              processes
            </li>
            <li className={styles.listItem}>
              Enhanced security by replacing open spreadsheets with
              authenticated ERP access
            </li>
            <li className={styles.listItem}>
              Empowered volunteers with clear task visibility and
              self-organization tools
            </li>
            <li className={styles.listItem}>
              Enabled online room booking, real-time event advertising, and
              contact-based outreach
            </li>
            <li className={styles.listItem}>
              Established long-term value through user-friendly documentation
              and handovers
            </li>
          </ul>
        </div>
        <div className={styles.tools}>
          <h1>🌱 What I Learned</h1>
          <h3 className={styles.subheading}>
            This experience gave me deep insight into:
          </h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              The day-to-day expectations of a Business Analyst in a lean,
              startup-style environment
            </li>
            <li className={styles.listItem}>
              How to apply Agile and design thinking pragmatically in a
              resource-limited context
            </li>
            <li className={styles.listItem}>
              The value of empathy, iterative prototyping, and stakeholder
              communication in delivering real business value
            </li>
            <li className={styles.listItem}>
              How to set clear goals, prioritize tasks, and deliver measurable
              outcomes
            </li>
          </ul>
          <p className={styles.paragraph}>
            This project helped me develop confidence as a Business Analyst —
            not just in using tools and frameworks, but in creating clarity and
            solutions where there was previously chaos.
          </p>
        </div>
      </main>
    </>
  );
}

export default BusinessAnalyst;
