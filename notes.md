# Processo: idealmente feito no começo

Bootstrap

- Monorepo: todos os projetos no mesmo repo
  - javascript: npm install
  - python: pip install
- Multi repo: cada projeto no seu repo

- Branch strategy:

1.

- master (write lock) - integration branch (production)
- features branches
- hotfix

2.

- master (write lock) - promotion (production)
- stage (write lock) - integration branch
- features branches
- hotfix

3.

- master (write lock) - promotion (production)
- stage (write lock) - stage (PO, stakeholders)
- dev (write lock) - integration branch
- features branches
- hotfix
