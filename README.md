# Paper Plane

* Demand exists; UPSC/SSC/Banks/State PSC is a huge, evergreen, money-paying market.
* MCQ practice with adaptive difficulty is a proven need.
* Rating system is a good differentiator; feels “scientific” and addictive like chess puzzles.
* LLM-scraped questions are dangerous; errors or hallucination will destroy credibility. Must have human vetting or at least dual-LLM + cross-check.
* Compliance; using PYQs or book questions without permission risks legal issues. You need to transform, not copy.
* The market is hyper-crowded (Oliveboard, Testbook, Adda247, Unacademy). Without a sharp wedge you become another practice app.

Biggest truth
This is not won by “number of questions”, it’s won by “quality of feedback loops”. If the platform tells aspirants exactly what to fix, and they can feel real improvement, then you win.

**C. Feature brainstorming / wedge**

Do not build a fat platform. Pick a wedge that gives unfair advantage.

Potential wedges

* **Adaptive Weakness Tutor**: After a test, the app does not just say wrong/right; it tells “This mistake is conceptual vs. memory vs. misread” and gives exact next-action.
* **ELO-style Rivalry Mode**: You do not compete with the syllabus; you compete with humans of same band. Daily duels, brackets, streaks.
* **Predictive “Exam-Likeness” Score**: Show a number like “This question has 87 percent chance of appearing in next CGL or UPSC prelim”.
* **LLM Explanation Filter**: Every question can generate a 2-line explanation at the right difficulty level (not teacher-style 2 pages).
* **Correction-Audit Layer**: Users can challenge a question and corrections get reputation rewards; this crowdsources quality control.

Minimum viable feature wedge that can actually hook: Daily adaptive rivalries plus actionable feedback.

---

**D. Technical architecture skeleton (practical build)**

Backend basics

* Core entities: User, Question, Tag/Topic, Attempt, RatingHistory
* Services: Auth, Question Ingestion/LLM Pipeline, Rating Engine (ELO), Recommendation Engine

Workflow (simplified)

1. **Ingestion**: PDF or HTML > scrape > chunk > classify > LLM rewrite in your format > store as draft > human or automated cross-check before publish.
2. **Serving**: Topic and difficulty aware question fetch; record attempt.
3. **Scoring**: ELO update per question per user; update question difficulty from crowd stats.
4. **Recommendation**: Serve next questions using user-rating gap and weakness vectors.

Stack suggestion for speed (not perfection)

* Backend: Node.js + PostgreSQL (or Mongo if you prefer document style)
* Queue for scraping/LLM: Redis or RabbitMQ
* Ratings & recommendation: separate service so you can optimize later
* LLM use: For rewrite + explain + classify. Never trust raw scrape.
* Web: React or Next for normal app; avoid Expo mobile at v0

Guardrails

* Keep ingestion isolated from live database.
* Keep rating computation idempotent & replayable.
* Write tests for recommendation logic first; it is the product.

---

Tell me what you want next:

1. A sharp **positioning statement** to stand apart from Testbook/Unacademy
2. A **1-month MVP scope**
3. A **detailed technical diagram with tables and flows**
4. Something else (specify 1 line)

Reply 1 / 2 / 3 / other+one-line.
