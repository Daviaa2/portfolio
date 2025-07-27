import styles from "./BusinessAnalyst.module.css";

function BusinessAnalyst() {
  return (
    <>
      <header>
        <h1>Business Analsyt Internship</h1>
      </header>
      <main>
        <div className={styles.overview}>
          <h1>🧩 Project Overview</h1>
          <p>
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
          <p>
            Lean Canvas operated using disconnected tools: spreadsheets for
            bookings, pen-and-paper visitor logs, interpersonal onboarding, and
            ad hoc messaging in Discord. This led to:
          </p>
          <ul>
            <li>
              Frequent double bookings and poor visibility over space usage
            </li>
            <li>Security and data privacy concerns</li>
            <li>Limited marketing capabilities</li>
            <li>Difficulty onboarding new clients and volunteers</li>
          </ul>
          <p>
            The overarching goal was to digitally transform core operational
            processes using tools already available in the business (Odoo ERP),
            while following the Lean philosophy of "Scrappy → Better → Best."
          </p>
        </div>
        <div className={styles.responsibilities}>
          <h1>🔍 My Role and Key Contributions</h1>
          <p>
            As the sole Business Analyst, I led the end-to-end analysis and
            solution design, collaborating directly with the founder,
            volunteers, and clients.
          </p>
          <h3>Key responsibilities</h3>
          <ul>
            <li>Conducted stakeholder interviews and surveys</li>
            <li>
              Mapped current state processes and identified inefficiencies
            </li>
            <li>
              Applied Agile and design thinking frameworks to iterate solutions
            </li>
            <li>
              Prototyped and tested tools including room booking systems,
              onboarding kits, and kiosks
            </li>
            <li>
              Created documentation and onboarding resources for continuity
            </li>
          </ul>
          <h3>Solutions implemented</h3>
          <ul>
            <li>Room Booking System – QR-based room reservation using Odoo</li>
            <li>
              Volunteer Kanban Board – Visual task management (physical and
              online)
            </li>
            <li>
              Digital Onboarding Kit – Centralized document with Discord/WiFi
              info, booking instructions, and facility map
            </li>
            <li>
              POS and Front Desk Kiosks – Automated visitor sign-in and
              on-the-spot payment via browser-secure terminals
            </li>
            <li>
              Email Campaign System – Contact-based outreach to promote events
              and generate leads
            </li>
            <li>
              Event Management on Website – Added event hosting to the Lean
              Canvas site using Odoo's event app
            </li>
          </ul>
        </div>
        <div className={styles.deliverables}>
          <h1>📊 Tools & Techniques Used</h1>
          <p>
            Odoo ERP, Jira, Google Workspace, Discord, QR Code Generators,
            Microsoft Word, Surveys (Forms), Miro
          </p>
          <h3>Techniques & Frameworks</h3>
          <ul>
            <li>Agile (Scrum sprints, Jira board, weekly standups)</li>
            <li>Design Thinking (Empathize, Prototype, Test)</li>
            <li>Stakeholder engagement & interviews</li>
            <li>Process Mapping & Root Cause Analysis</li>
            <li>Feasibility & competitor analysis</li>
            <li>Documentation & training handovers</li>
          </ul>
        </div>
        <div className={styles.outcomes}>
          <h1>🤝 Stakeholder Engagement</h1>
          <p>
            I held weekly stakeholder meetings with the founder (Jim),
            facilitated group feedback sessions with volunteers, and conducted
            client interviews and surveys. My approach involved
          </p>
          <ul>
            <li>
              Practicing active listening and summarizing to confirm
              understanding
            </li>
            <li>Using informal settings to gather honest insights</li>
            <li>
              Validating priorities and solutions iteratively to avoid scope
              creep
            </li>
          </ul>
        </div>
        <div className={styles.reflection}>
          <h1>🎯 Key Outcomes & Achievements</h1>
          <p>
            This experience strengthened my ability to translate stakeholder
            needs into actionable insights and gave me firsthand exposure to
            Agile environments.
          </p>
          <ul>
            <li>
              Improved operational efficiency through digitization of 5+ manual
              processes
            </li>
            <li>
              Enhanced security by replacing open spreadsheets with
              authenticated ERP access
            </li>
            <li>
              Empowered volunteers with clear task visibility and
              self-organization tools
            </li>
            <li>
              Enabled online room booking, real-time event advertising, and
              contact-based outreach
            </li>
            <li>
              Established long-term value through user-friendly documentation
              and handovers
            </li>
          </ul>
        </div>
        <div className={styles.tools}>
          <h1>🌱 What I Learned</h1>
          <h3>This experience gave me deep insight into:</h3>
          <ul>
            <li>
              The day-to-day expectations of a Business Analyst in a lean,
              startup-style environment
            </li>
            <li>
              How to apply Agile and design thinking pragmatically in a
              resource-limited context
            </li>
            <li>
              The value of empathy, iterative prototyping, and stakeholder
              communication in delivering real business value
            </li>
            <li>
              How to set clear goals, prioritize tasks, and deliver measurable
              outcomes
            </li>
          </ul>
          <p>
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
