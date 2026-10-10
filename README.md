
# Pet Health Data Platform

A personal data engineering and analytics platform for collecting, transforming, monitoring, and analyzing feline health telemetry.

The platform combines automated IoT/device data, manual health observations, and analytical workflows to create a longitudinal view of feline health, behavior, feeding, hydration, digestion, and wellness trends.

This project serves two purposes:

1. Build a practical health-monitoring system for my cats.
2. Provide a real-world sandbox for developing data engineering, analytics engineering, software engineering, and data science skills.

The system is designed to evolve incrementally from a local application into a production-style data platform with ingestion pipelines, data quality validation, orchestration, analytics engineering, event streaming, anomaly detection, and reporting.

---

## Project Status

Early development.

Current priorities:

- Investigate Petlibro device data access
- Define the core data model
- Build the PostgreSQL database
- Build the initial Python ingestion layer
- Create a REST API
- Support manual health-data entry
- Build the first analytics dashboard

The architecture will evolve as real requirements emerge.

---

# Goals

## Health Monitoring

Track and analyze:

- Feeding behavior
- Food consumption
- Meal frequency
- Missed meals
- Feeding duration
- Hydration
- Water consumption
- Stool frequency
- Stool quality
- Weight changes
- Medication
- Health observations
- Veterinary visits
- Behavioral changes

The long-term goal is to identify meaningful changes from each cat's individual baseline.

This system is intended for monitoring, analysis, and recordkeeping. It is not intended to diagnose medical conditions.

---

# Data Sources

## Automated Data

Potential automated sources include:

- Petlibro smart feeder telemetry
- Petlibro smart fountain telemetry
- Feeding events
- Food dispensed
- Water consumption
- Water levels
- Device status
- Device errors
- Other available Petlibro telemetry

The exact integration method will be determined through research into the specific Petlibro devices being used.

Potential integration methods may include:

- Official APIs
- Cloud APIs
- Mobile application APIs
- Local network protocols
- Device communication protocols
- Other documented or legitimately reverse-engineered interfaces

No particular API or protocol is assumed to exist until it has been verified.

## Manual Data

Manual data entry will support:

- Stool observations
- Weight measurements
- Medication
- Symptoms
- Behavioral observations
- Health notes
- Veterinary visits
- Other relevant observations

---

# Architecture

## Tech Stack

Languages

-Python
-SQL
-TypeScript
-JavaScript
-Bash

Backend & API
-Python
-FastAPI
-Pydantic
-SQLAlchemy
-Alembic
-REST API

Frontend & Dashboard

-TypeScript
-JavaScript
-React
-Vite
-HTML5
-CSS3
-Apache ECharts
-D3.js

Databases & Storage

-PostgreSQL
-Redis
-DuckDB
-Amazon S3
-MinIO
-Apache Parquet
-Data Engineering
-Apache Kafka
-Apache Airflow
-Apache Spark
-PySpark
-Pandas
-NumPy
-Python

Analytics Engineering

-dbt
-dbt Core
-SQL
-Data Modeling
-Relational data modeling
-Dimensional modeling
-Star schema
-Fact tables
-Dimension tables
-Slowly Changing Dimensions
-Data marts
-Data warehouse concepts

Data Quality & Validation

-Pandera
-dbt tests
-Great Expectations
-Pydantic
-Data validation
-Data profiling
-Data freshness monitoring
-Workflow Orchestration
-Apache Airflow
-Dagster
-n8n

Event Streaming

-Apache Kafka
-Kafka Producers
-Kafka Consumers
-Kafka Topics
-Kafka Consumer Groups
-Event-driven architecture
-Real-time data processing

Machine Learning & Analytics

-scikit-learn
-statsmodels
-Pandas
-NumPy
-Time-series analysis
-Anomaly detection
-Forecasting
-Behavioral baseline modeling
-Feature engineering

Visualization & Business Intelligence

-React
-Apache ECharts
-D3.js
-Metabase
-Grafana

Containerization

-Docker
-Kubernetes
-Ingress
-Kubernetes Jobs
-CronJobs

Horizontal Pod Autoscaling

Helm

NGINX Ingress Controller

Cloud & Infrastructure

Amazon Web Services (AWS)

Amazon EKS

Amazon RDS

Amazon S3

Amazon ECR

AWS IAM

AWS VPC

AWS CloudWatch

AWS Secrets Manager

Infrastructure as Code

Terraform

Terraform AWS Provider

Kubernetes Provider

Helm Provider

Observability

Prometheus

Grafana

OpenTelemetry

Structured logging

Metrics

Distributed tracing

Application monitoring

Pipeline monitoring

Data freshness monitoring

Kafka monitoring

Testing

pytest

pytest-asyncio

-Integration testing
-Unit testing
-API testing
-Data testing
-Pandera validation
-Code Quality

Ruff

Black

MyPy

Pre-commit

Type hints

PEP 8

CI/CD

Git

GitHub

GitHub Actions

Docker builds

Automated testing

Container image scanning

Deployment automation

Trivy

Security

JWT

OAuth2

IAM

Kubernetes Secrets

AWS Secrets Manager

Environment variables

API authentication

Role-based access control

Network security

Pet / IoT Integration

Petlibro Smart Feeder

Petlibro Smart Fountain

Petlibro device telemetry

Petlibro APIs where available

HTTP/REST

WebSockets where applicable

MQTT where applicable

Device/network protocol investigation

IoT event ingestion

Development Environment

macOS / Linux

VS Code

Docker Desktop

Python virtual environments

Make

Bash

Git

Documentation

Markdown

OpenAPI / Swagger

dbt documentation

Architecture diagrams

Data dictionaries

Data lineage

Architecture Decision Records (ADRs)

## Initial Architecture

```text
Petlibro Devices
      |
      v
Python Ingestion
      |
      v
PostgreSQL
      |
      +------------------+
      |                  |
      v                  v
   FastAPI           Analytics
      |                  |
      v                  v
 Web Application     Streamlit
