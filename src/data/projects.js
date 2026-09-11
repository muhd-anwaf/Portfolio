const github = 'https://github.com/muhd-anwaf';

export const selectedProjects = [
  {
    slug: 'springboot-ecommerce',
    number: '01',
    category: 'Backend / Ecommerce',
    title: 'Spring Boot Ecommerce',
    summary: 'A full-stack ecommerce application with a Java backend organized around product, cart, order, address, and authentication flows.',
    stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'JWT'],
    repositoryUrl: `${github}/springboot-ecommerce`,
    visual: 'api',
    highlights: ['REST controllers for products, categories, carts, orders, addresses, and authentication.', 'Spring Data JPA persistence with PostgreSQL and DTO mapping.', 'JWT-based security configuration, validation, OpenAPI documentation, and global exception handling.'],
  },
  {
    slug: 'rag-document-qa',
    number: '02',
    category: 'RAG / AI application',
    title: 'RAG Document Q&A Assistant',
    summary: 'A document-question-answering application that retrieves relevant PDF content and returns grounded responses with citations.',
    stack: ['Python', 'LangChain', 'Gemini API', 'FAISS', 'Streamlit'],
    repositoryUrl: `${github}/Rag-Document-QA`,
    liveUrl: 'https://rag-documents-app.streamlit.app/',
    visual: 'rag',
    highlights: ['PDF ingestion preserves filename and page metadata for source citations.', 'Semantic chunking, embeddings, and vector retrieval surface relevant context.', 'Structured output validation, unsupported-question handling, and prompt-injection resistance support the RAG pipeline.'],
  },
  {
    slug: 'job-application-tracker',
    number: '03',
    category: 'Backend / API design',
    title: 'Job Application Tracker API',
    summary: 'A Java backend for organizing job applications, interviews, attachments, analytics, reports, and related workflow data.',
    stack: ['Java 21', 'Spring Boot', 'SQLite', 'Flyway', 'MapStruct'],
    repositoryUrl: `${github}/job-application-tracker`,
    visual: 'tracker',
    highlights: ['Feature-focused controllers, services, repositories, DTOs, and mappers for application workflow data.', 'Database migrations with Flyway, persistence through JPA, and a custom SQLite dialect.', 'Reporting, analytics, pagination, filtering, attachments, and global exception handling are represented in the API structure.'],
  },
];

export const allProjects = [
  { title: 'React Ecommerce Frontend', description: 'A React and Vite ecommerce frontend with pages for home, cart, orders, sign-in, and navigation components.', technologies: ['React', 'Vite', 'Tailwind CSS'], repositoryUrl: `${github}/React-Ecommerce-Frontend`, archived: true },
  { title: 'Binary Classification with Logistic Regression in PyTorch', description: 'A PyTorch logistic-regression project for predicting League of Legends match outcomes from gameplay statistics.', technologies: ['PyTorch', 'Python'], repositoryUrl: `${github}/Binary-Classification-with-Logistic-Regression-in-PyTorch` },
  { title: 'Aircraft Damage Detection with EfficientNet and BLIP', description: 'A deep-learning pipeline for classifying aircraft damage images and generating image descriptions.', technologies: ['EfficientNetB0', 'BLIP', 'Python'], repositoryUrl: `${github}/Automated-Aircraft-Structural-Damage-Detection-with-EfficientNet-and-BLIP` },
  { title: 'Gold Trading Action Analytics Pipeline', description: 'A time-series pipeline for hold, buy, and sell action prediction using stacked gradient-boosted ensembles.', technologies: ['XGBoost', 'LightGBM', 'CatBoost'], repositoryUrl: `${github}/Advanced-Analytics-Pipeline-for-Predicting-Multi-Class-Gold-Trading-Actions` },
  { title: 'Retail Cost Prediction', description: 'A cost-prediction project using feature engineering and gradient boosting.', technologies: ['Python', 'Gradient Boosting'], repositoryUrl: `${github}/retail-cost-prediction-ml` },
  { title: 'Walmart Sales Forecast MLOps', description: 'A public Python repository for Walmart sales forecasting and MLOps work.', technologies: ['Python'], repositoryUrl: `${github}/Walmart-sales-forecast-MLOps` },
  { title: 'RAG ChatBot', description: 'A public repository for a RAG chatbot; project details are not documented in the repository description.', technologies: [], repositoryUrl: `${github}/RAG_ChatBot` },
  { title: 'Chicago Crime Analysis', description: 'A public notebook repository for Chicago crime analysis.', technologies: ['Jupyter Notebook'], repositoryUrl: `${github}/chicago_crime_analysis` },
  { title: 'Databases, SQL, Python & Data Science', description: 'SQL and Python data-analysis practice using a SQLite database.', technologies: ['SQL', 'Python', 'SQLite'], repositoryUrl: `${github}/Databases-SQL-Python-Data-Science` },
];

export const projects = [...selectedProjects, ...allProjects];

export function getProjectBySlug(slug) {
  return selectedProjects.find((project) => project.slug === slug);
}
