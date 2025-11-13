// Certificate PDF links mapping
const certificatePDFs = {
    // AWS Training & Certifications
    'AWS Technical Essentials (Español LATAM)': 'https://drive.google.com/file/d/17ojdlvAMFQ9aBfA94Rwukbhhzfaj7dmc/view?usp=sharing',
    'Official Practice Question Set: AWS Certified Cloud Practitioner (CLF-C02 -Español LATAM)': 'https://drive.google.com/file/d/1YC7GRojkoUUhsFUzBVeOn557ssAowaYv/view?usp=sharing',
    'AWS Cloud Practitioner Essentials (Español LATAM)': 'https://drive.google.com/file/d/1u425DwejbLWMXWfbJWChBiaJiXByR14k/view?usp=sharing',
    'AWS Identity and Access Management - Basics (Español LATAM)': 'https://drive.google.com/file/d/1DRFFsetY-jZpiMoeaUp1IIzpStz4sWmU/view?usp=sharing',
    'Domain 1 Review: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1usAyuEnvmRsrUwzustB70f3CUxfZvgQ1/view?usp=sharing',
    'Domain 2 Review: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1VBa3lxg4MFcWjASjNWv_whIASaBpT3yp/view?usp=sharing',
    'Domain 3 Review: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/12HxEhLSuGJ9E8C9HfUDgaPfAtZhonxJ_/view?usp=sharing',
    'Domain 4 Review: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1OvXxOR6PNZF90Q-HZNocnIAFq2W96yyP/view?usp=sharing',
    'Exam Prep Overview: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1oRf_yZ4kujcyPVn7uJRhiaEvgkXqAj0T/view?usp=sharing',
    'Exam Prep Plan Overview: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1Es58MmIhS1taC4uItsGp3Xsrx8k4Zg_l/view?usp=sharing',
    'Exam Prep Summary: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1vP_I606BLu1BLfRmImVI2E_p_3cUBk73/view?usp=sharing',
    'Getting Started with DevOps on AWS (Español LATAM)': 'https://drive.google.com/file/d/15ALKAw0jHWwnQAYiwtqxSaRXS5LuOdTL/view?usp=sharing',
    'AWS Cloud Quest: Cloud Practitioner': 'https://drive.google.com/file/d/1dY0FfhSG-8QJ9kHWAP-pZMP3Q9nA0wkC/view?usp=sharing',
    'Deploying Serverless Applications (Español LATAM)': 'https://drive.google.com/file/d/1aHKs-eOME1qhmAj9jRLaCAtLm1J6xNYg/view?usp=sharing',
    '.NET Workloads on Amazon ECS and AWS Fargate': 'https://drive.google.com/file/d/1MRYMaNtaoHxEAWU63dvCjt9t0u-u6NKx/view?usp=sharing',
    'Amazon ECS - Knowledge Badge Readiness Path': 'https://drive.google.com/file/d/1IuVJhuFKwyZRMJcInAbrymn6RGWYHMgI/view?usp=sharing',
    'Amazon ECS Auto Scaling and Cost Optimization': 'https://drive.google.com/file/d/1aBJMr5Ch1UvwpOHwBC9xYM9iZ-roTRFn/view?usp=sharing',
    'Amazon ECS Deployment': 'https://drive.google.com/file/d/1wl7ozHt1N9CYune6h1nvcSRN0uWsWLFs/view?usp=sharing',
    'Amazon ECS Fundamentals': 'https://drive.google.com/file/d/1SuT8lPkeD7-vj5YupIAcn6UXDxutTstB/view?usp=sharing',
    'Amazon ECS Networking': 'https://drive.google.com/file/d/1YKcjvM2sqWC4e2Gmmo7nFknWNgkus2Ja/view?usp=sharing',
    'Amazon ECS Observability': 'https://drive.google.com/file/d/1hGM77N5tHru0ExQD4fEOOzJb4IPadPcR/view?usp=sharing',
    'Amazon ECS Security': 'https://drive.google.com/file/d/1i-j9lVCnw_fg_3aKF_CBJWzrl2Tyacip/view?usp=sharing',
    'Containers Learning Series for Amazon ECS Overview': 'https://drive.google.com/file/d/1-zHxEn3EpfHQ2rR-cCx_YJuurbmmDBWh/view?usp=sharing',
    'Deploying a Workload on Amazon ECS': 'https://drive.google.com/file/d/1UBHkIkNc_sSThbCCb6npdg042bey9acH/view?usp=sharing',
    'ECS Introduction to Containers': 'https://drive.google.com/file/d/1dIS7H_pq9Z8hCNqa1_Hg1tSF7MiLCB2u/view?usp=sharing',
    'Introduction to Container Basics': 'https://drive.google.com/file/d/1YApAPj1oSiXt3DHycHxn_orlxq6nnRRw/view?usp=sharing',
    'Introduction to Kubernetes Core Concepts': 'https://drive.google.com/file/d/1oC7oDsrLTwgYxM6N07eaoFKRankHvKFy/view?usp=sharing',
    'Job Roles in the Cloud': 'https://drive.google.com/file/d/1hvs8A_ziq7EvXjccnxiMX_z8dnnUVMYJ/view?usp=sharing',
    'Why run your Kubernetes workloads on Amazon Elastic Kubernetes Service (EKS)?': 'https://drive.google.com/file/d/12rWE2QriO8YvnTMG5r6JuFpafO8ZuE1-/view?usp=sharing',
    'Amazon API Gateway for Serverless Applications': 'https://drive.google.com/file/d/1oII-jrNuxDOer6oTJ4n5plsB5MXtEAsj/view?usp=sharing',
    'Amazon EC2 Basics': 'https://drive.google.com/file/d/1RS-jx-THileUxoPMokuuuWKV_mB3TpN0/view?usp=sharing',
    'Amazon EC2 Observability, Monitoring, and Troubleshooting': 'https://drive.google.com/file/d/1j65k2kV-9jaYiU7qM-tWtDVqFuYRIajd/view?usp=sharing',
    'Architecting Serverless Applications': 'https://drive.google.com/file/d/1I8Vdl1d7Hrhp3GA1bHnWEuZonNjbxXYm/view?usp=sharing',
    'AWS Billing and Cost Management': 'https://drive.google.com/file/d/1IgEhjzIiVEopsUv_w_Ve8Qo4Bb6Q29Xz/view?usp=sharing',
    'AWS Compute Services Overview': 'https://drive.google.com/file/d/1VP1W2lboGQknVE9qzOVTf24GgWqj7kFD/view?usp=sharing',
    'AWS Foundations: Getting Started with the AWS Cloud Essentials': 'https://drive.google.com/file/d/1eJbA2SQz7G9mk67455z9bxxVTrproKfe/view?usp=sharing',
    'AWS Identity and Access Management (IAM) - Troubleshooting': 'https://drive.google.com/file/d/1XZVwVu_8xctU4GJhudcx1Gj9LJHXTgAB/view?usp=sharing',
    'AWS Lambda Foundations': 'https://drive.google.com/file/d/1EonB9ZBxco79K5eynkdR9W_u4nKNtAE-/view?usp=sharing',
    'AWS Security Fundamentals Second Edition': 'https://drive.google.com/file/d/13lKzKdP5VCIFs2AkpmIb0NT9oYIVbaXl/view?usp=sharing',
    'AWS Shared Responsibility Model': 'https://drive.google.com/file/d/1oxn-LGOLyT0fq6YoFxNtegwuLvtC2bWZ/view?usp=sharing',
    'AWS Well-Architected Foundations': 'https://drive.google.com/file/d/14CNcbCyIdQ1LXnjEqEamiuPd3TMzsk1N/view?usp=sharing',
    'Build with Amazon EC2': 'https://drive.google.com/file/d/1z61c_yvOYQWxe-39K6hL8Dal89wCGaCQ/view?usp=sharing',
    'Compute - Knowledge Badge Readiness Path': 'https://drive.google.com/file/d/1RdwCnylksxBZOwZmUIIpty8rjMlFDqy8/view?usp=sharing',
    'Compute Cost Optimization Services': 'https://drive.google.com/file/d/1O6w4LnbJgJf_CQqOntIf7JyevKd_lXPA/view?usp=sharing',
    'Compute Knowledge Badge Assessment': 'https://drive.google.com/file/d/1lPJ7VWAcfcVmFmM3Nue0J8jnHsIz8VU6/view?usp=sharing',
    'Compute Pre-assessment': 'https://drive.google.com/file/d/1qIlmcHcorDa10qvX_fLewgUwlcGca2qj/view?usp=sharing',
    'Confidential Computing with AWS Compute': 'https://drive.google.com/file/d/13z5esHNngmLdA2MCJ5vejWARCv8sphQj/view?usp=sharing',
    'Deploying Serverless Applications': 'https://drive.google.com/file/d/1PrpnUIvrLzsMarC1LMwJDV8oe810HgdL/view?usp=sharing',
    'Designing Event-Driven Architectures': 'https://drive.google.com/file/d/1oPuQXHVKJu0L4NCzYORfC2l7z34KIGg2/view?usp=sharing',
    'Getting into the Serverless Mindset': 'https://drive.google.com/file/d/1jQALMV3cZplmaQ53ly21Nnryxosb90yz/view?usp=sharing',
    'Getting Started with Cloud Acquisition': 'https://drive.google.com/file/d/1NrnER5d-qilCxeWDGJyWVzBp-OHgBjYV/view?usp=sharing',
    'Innovations in Amazon EC2': 'https://drive.google.com/file/d/1v0qABv91YZ7Q_PlIj-aLrJf8-8D_IuDn/view?usp=sharing',
    'Introduction to Amazon EC2': 'https://drive.google.com/file/d/1Pah_4RNKuFvj9yV0-TkbX1WTmHMxbdWy/view?usp=sharing',
    'Introduction to AWS Identity and Access Management (IAM)': 'https://drive.google.com/file/d/1rnd-95-5y3uRWWhZtysxoaHMA2Qr684X/view?usp=sharing',
    'Networking Core Pre-Assessment': 'https://drive.google.com/file/d/1wlljoZmN0nhJ2ueCJiiLMQLVK_grBhR4/view?usp=sharing',
    'Right Size Your Amazon EC2 Workload': 'https://drive.google.com/file/d/1d3jKYP9A5lJfbXSSG_08SBRXqGO6NXUz/view?usp=sharing',
    'Scaling Serverless Architectures': 'https://drive.google.com/file/d/14MC8EUrrQ-dgH_G9YgGfM6BAFpp6X0iz/view?usp=sharing',
    'Security and Observability for Serverless Applications': 'https://drive.google.com/file/d/1D-BWCwO5fdCFtVND8c06lG08pXzzK3zX/view?usp=sharing',
    'Amazon EKS - Knowledge Badge Readiness Path': 'https://drive.google.com/file/d/1F2NKmADHSTcD3ijo25y7Ngv0c0NbjXl_/view?usp=sharing',
    'Amazon EKS Deployment Options': 'https://drive.google.com/file/d/1CyM-mJsf3CqZtOhqW33uw5wyRk25jHvU/view?usp=sharing',
    'Amazon EKS Knowledge Badge Assessment': 'https://drive.google.com/file/d/1jstWi1ftzw6Rk0WratyBOHhDcVpQIcZw/view?usp=sharing',
    'Amazon EKS Networking': 'https://drive.google.com/file/d/1WnEPyha4I07f-E5MC3W7Xoku_m0-MthH/view?usp=sharing',
    'Amazon EKS Security': 'https://drive.google.com/file/d/1gi6u71sIoZ1ELxUQZxXzLEwZLiguRfJT/view?usp=sharing',
    'Amazon FSx for Lustre Primer': 'https://drive.google.com/file/d/10Qtox7k0MJZdg6KM8J4XuU9P9Y7j2Y3U/view?usp=sharing',
    'Amazon FSx for Windows File Server Primer': 'https://drive.google.com/file/d/1EdITj2Kf1IiVc9wM3N3j-wxFhYl84UDZ/view?usp=sharing',
    'Autoscaling and Cost Optimization': 'https://drive.google.com/file/d/1MwSN8J0n7_UuxwfnnwYrsEmvfq_yBTeY/view?usp=sharing',
    'AWS Elastic Disaster Recovery - A Technical Introduction': 'https://drive.google.com/file/d/1kq0UXMUUhMR_ekth0lRCTKgLM7sjbjQb/view?usp=sharing',
    'AWS for Media & Entertainment Content Production Learning Plan Assessment': 'https://drive.google.com/file/d/10jEcqWqzqbU--NiH9eZiK1327paQseeB/view?usp=sharing',
    'AWS Security Best Practices: Monitoring and Alerting': 'https://drive.google.com/file/d/1NRWPRfBSMOrKQM0NEZAvRzQJS97Cos51/view?usp=sharing',
    'AWS Security Best Practices: Network Infrastructure': 'https://drive.google.com/file/d/10y5p9-vH3PcWXcM8qWTSBgTcspQmwW5e/view?usp=sharing',
    'AWS Security Incident Response - Compromised IAM Credentials Use Case': 'https://drive.google.com/file/d/1CrNWMbmFuqZUEuY1KulObUWOd-canqWd/view?usp=sharing',
    'AWS Security Incident Response Overview': 'https://drive.google.com/file/d/1ndW7ZYUKO5Aw7EpbzgIyaZTwC_GHJneJ/view?usp=sharing',
    'AWS SimuLearn: Core Security Concepts': 'https://drive.google.com/file/d/17bWZ2pZ0XHU78yTTfNqzCsoQpY5I-FuA/view?usp=sharing',
    'Basic Observability for Amazon EKS': 'https://drive.google.com/file/d/1J_r5AxhLOf9L8eGiJelbCDOTOuwfNVwX/view?usp=sharing',
    'Cloud Essentials - Knowledge Badge Readiness Path (includes Labs)': 'https://drive.google.com/file/d/1w1cogVz7MBjH3JqJTzrL96ntsd9L3R-a/view?usp=sharing',
    'Deep Dive on Container Security': 'https://drive.google.com/file/d/1XQ-fDY5UuYOwGvFtNDBv3Z-_R5IO15Ei/view?usp=sharing',
    'Deploying Microservices to Amazon EKS': 'https://drive.google.com/file/d/10ffcYsBSQrICGoN-EkthDIIfIN7DMx7S/view?usp=sharing',
    'Getting Started with AWS Storage': 'https://drive.google.com/file/d/1AxCb3OkiAUHK32JiYYa72qsAnHQVsscA/view?usp=sharing',
    'GitOps for Amazon EKS Automation': 'https://drive.google.com/file/d/1iCiym2pObFEKnGQSmrl_YI2K3XUMkCLS/view?usp=sharing',
    'Introduction to Amazon Simple Storage Service (S3)': 'https://drive.google.com/file/d/1ELSNZRS6XFYBnJlXaPB-gaItM4Xm-5Bb/view?usp=sharing',
    'Introduction to AWS Identity and Access Management (IAM)': 'https://drive.google.com/file/d/1pw_a5dPSLUT1055PAxogy4G3WSbXZ-Sr/view?usp=sharing',
    'Protect Your Web-facing Workloads with AWS Security Services': 'https://drive.google.com/file/d/123CoYxQwQ2pRqOzbcgYCIq4KNWiFnC4-/view?usp=sharing',
    'Security Governance at Scale – Technical (Digital)': 'https://drive.google.com/file/d/1W8zCbB5V_yiELjqyy8DsVtYfUYkxcfW7/view?usp=sharing',
    'The Amazon EKS Cluster': 'https://drive.google.com/file/d/142bEhPbDbrAHuNDplmfOv_bkVJR7k1dU/view?usp=sharing',
    'Threat Modeling for Builders Workshop': 'https://drive.google.com/file/d/1wVcRSRaiCSVVfV9Zy80aXk4BbllI5obZ/view?usp=sharing',
    'Amazon Connect Administration': 'https://drive.google.com/file/d/1u52wT_uTyP4ceNclvX8JuLEqmLTp8sxa/view?usp=sharing',
    'Amazon Connect AI Agent Capabilities': 'https://drive.google.com/file/d/1xPgj8egpj2RQRbvgbrDpdvYUD9-c9S5J/view?usp=sharing',
    'Amazon Connect AI and ML Fundamentals': 'https://drive.google.com/file/d/1tscchRObb-P851lol9TJWGS94TZy1CkU/view?usp=sharing',
    'Amazon Connect AI Customer Engagement': 'https://drive.google.com/file/d/15i4SJ7hdw__XdEnKi-C3UeLYw4llfpjH/view?usp=sharing',
    'Amazon Connect AI Self- Service Capabilities': 'https://drive.google.com/file/d/1Cglb2n8a5bwYQtr9vY6IU-sYvFG7X2Kn/view?usp=sharing',
    'Amazon Connect AI Supervisor Capabilities': 'https://drive.google.com/file/d/1VWIFgzpVyvu_sr3ZNo_7jRdOKRegHN7Y/view?usp=sharing',
    'Amazon Connect AI Workforce Optimization': 'https://drive.google.com/file/d/1ZKtRlvdZWTHQORv-zDGi-B12ioylgk63/view?usp=sharing',
    'Amazon Connect Architecture Fundamentals': 'https://drive.google.com/file/d/1ZXoSruxfP0miUatrj9WMmUvpcs1YEYK6/view?usp=sharing',
    'Amazon Connect Foundations': 'https://drive.google.com/file/d/1DjanGgqbDS5iUXtggPMnbEjl2fkSAUaG/view?usp=sharing',
    'Amazon Connect Metrics & Analytics': 'https://drive.google.com/file/d/17R_7AQ70rX_F6quZb3GODAZZDBObqY1r/view?usp=sharing',
    'Amazon Connect Operations': 'https://drive.google.com/file/d/1c2e1hr7Du_t-fceC07UiMTMJSKtc80z0/view?usp=sharing',
    'Amazon Elastic File System (Amazon EFS) Primer': 'https://drive.google.com/file/d/1V_WRsKE2UqnPTh04Xd_EgWAEKfwXv-i8/view?usp=sharing',
    'Amazon Simple Storage Service (Amazon S3) Business Continuity and Disaster Recovery': 'https://drive.google.com/file/d/1WyghBcalIjuDTYUMSQmmgTVIc6Vz7nOU/view?usp=sharing',
    'AWS Backup Primer': 'https://drive.google.com/file/d/1JU6e8xpSwLlDMJsGfLCiX-ViFA2PlCKK/view?usp=sharing',
    'AWS DataSync Primer': 'https://drive.google.com/file/d/1t_Z_pUuvKOvXCLJKuaVuS2BcZe1p5TVs/view?usp=sharing',
    'AWS Skills Centers: Becoming a Cloud Practitioner - Part 4 - Advanced Cloud Services': 'https://drive.google.com/file/d/1AXXK720IyhnARE31Ouia3n496dUZpVwy/view?usp=sharing',
    'AWS Snowball Edge Logistics and Planning': 'https://drive.google.com/file/d/17rc4f3qmcBjdZQ4HZdMCN4NdVdeqX__u/view?usp=sharing',
    'AWS Snowball Edge Primer': 'https://drive.google.com/file/d/1iNYqjJYh1-w8MyKcQkRSrMU1U9k8N-zQ/view?usp=sharing',
    'AWS Storage Gateway Deep Dive: Amazon S3 File Gateway': 'https://drive.google.com/file/d/1aCI4CAd-D8tDJd9TAwosYwznduKIfaOb/view?usp=sharing',
    'AWS Storage Gateway Deep Dive: Tape Gateway': 'https://drive.google.com/file/d/1OLkP0hcecJpA71FybonvGUWWmQtJou8O/view?usp=sharing',
    'AWS Storage Gateway Deep Dive: Volume Gateway': 'https://drive.google.com/file/d/1XQFzSfGvFK3kH53GDLXJX8vY6kG1zIbC/view?usp=sharing',
    'Data Protection and Disaster Recovery Knowledge Badge Assessment': 'https://drive.google.com/file/d/1mCw1O8h0TFyQkvdykk92FHdVM1hRL8hX/view?usp=sharing',
    'Deep Dive: Managing and Monitoring Amazon Elastic Block Store (Amazon EBS)': 'https://drive.google.com/file/d/1tQolw4qns8BXndJrlSjmgojCrgIvaYHu/view?usp=sharing',
    'Designing and Deploying an Amazon Elastic File System (Amazon EFS) Solution': 'https://drive.google.com/file/d/1LqZlVGAo3a2uMUBpK4_BKYns2SolgkEB/view?usp=sharing',
    'Introduction to AWS Key Management Service': 'https://drive.google.com/file/d/1Fy-rFpyvG1NZ22nJNLJZs1I---peDIoQ/view?usp=sharing',
    'Managing, Monitoring, and Optimizing your Amazon Elastic File System (Amazon EFS) Solution': 'https://drive.google.com/file/d/1cdBfH-uV-Ks-oOzj11Vbqry8jGOHNXAu/view?usp=sharing',
    'Performing a Basic Audit of your AWS Environment': 'https://drive.google.com/file/d/1LqnBtPR9i17pWwpRsquVu06qQT8rODJM/view?usp=sharing',
    'Securing and Protecting Your Data in Amazon Simple Storage Service (Amazon S3)': 'https://drive.google.com/file/d/1TgGO-Dxu1jxEvMoUj5NbOwg1IY70avZW/view?usp=sharing',
    'Securing Data in Amazon Elastic File System (Amazon EFS)': 'https://drive.google.com/file/d/11ROCFNpSTTAPVf72bIs3lvIi28y-n2To/view?usp=sharing',
    'Selecting your Data Migration Strategy with AWS': 'https://drive.google.com/file/d/1hU1wKYNLZzJAqb82jgQDBiBq1Pu9cLJe/view?usp=sharing',
    'Storage Data Protection and Disaster Recovery - Knowledge Badge Readiness Path': 'https://drive.google.com/file/d/1JRWosX-DJQRJhS885rn3ttSnWklU8EDU/view?usp=sharing',
    'Amazon Connect AI Fundamentals - Knowledge Badge Readiness Path': 'https://drive.google.com/file/d/146MuwXWijDCxK1SaEgMesDKk1sonkXZt/view?usp=sharing',
    'Amazon Connect AI Fundamentals Assessment': 'https://drive.google.com/file/d/1DB7NFwEj84s03-9M_nJ83ZXL0EovLN1V/view?usp=sharing',
    'Amazon Connect and Amazon EventBridge Intermediate': 'https://drive.google.com/file/d/1iqxfFqnOxkbZt4oQFOTxTt0Un6wXDEhV/view?usp=sharing',
    'Amazon Connect APIs Intermediate': 'https://drive.google.com/file/d/1D7u_ErDJz02OSGG8bBFMp-vsKOruj7cl/view?usp=sharing',
    'Amazon Connect Data Streaming Intermediate': 'https://drive.google.com/file/d/1k2Mz4Mawc60JRNtcory1ALPKBDTkX6QK/view?usp=sharing',
    'Amazon Connect Development Fundamentals': 'https://drive.google.com/file/d/1FqLLGmbjw5Rgg1sSoOV0WR0hfmIMhMQe/view?usp=sharing',
    'Amazon Connect Flows Lambda Integrations Fundamentals': 'https://drive.google.com/file/d/16RTYGs0a3wWziZYKuiviRkJGQS3wW5WY/view?usp=sharing',
    'Amazon Connect Fundamentals - Knowledge Badge Readiness Path': 'https://drive.google.com/file/d/1s913dDR-TQvMsat7YOqr3TyWSSmq61Ix/view?usp=sharing',
    'Amazon Connect Fundamentals Assessment': 'https://drive.google.com/file/d/1kdlpRqxpicX5bPWnrv3NX1X6p2Q3scnq/view?usp=sharing',
    'Amazon Connect Integrations Intermediate': 'https://drive.google.com/file/d/1a1KtFrHv2ZzulJC5D3hVRbSWGz1wg0Gl/view?usp=sharing',
    'Amazon Elastic Block Store (Amazon EBS) Primer': 'https://drive.google.com/file/d/1pjeFJGlepBc0bCS2tY0fSm6tXt8Re6Zz/view?usp=sharing',
    'Amazon FSx for NetApp ONTAP Primer': 'https://drive.google.com/file/d/1wULOXwkso1GXOfk5ivFruEqT_7qJ0By3/view?usp=sharing',
    'Build with Amazon FSx for OpenZFS': 'https://drive.google.com/file/d/13ciciZ7wo0wCzojP7FV7gqpbWOYtHbwv/view?usp=sharing',
    'Data Migration Knowledge Badge Assessment': 'https://drive.google.com/file/d/1xZ12drddmhkJ1ny54f2LnxtlnnThBEDf/view?usp=sharing',
    'Deep Dive: Amazon Elastic Block Store (Amazon EBS) Performance Optimization': 'https://drive.google.com/file/d/1zCLA6TsDMPCxu2vhGWcirJYckDqd6q9f/view?usp=sharing',
    'Moving to the Cloud with Amazon FSx': 'https://drive.google.com/file/d/1_yti8Bc31BJjC7gz5pwqFNBCO1C5g1fa/view?usp=sharing',
    'Running High Performance Applications with Amazon FSx': 'https://drive.google.com/file/d/1AccGwFC2Zho8xAx-Lgw6L1O7sWWBgZzh/view?usp=sharing',
    'Storage Data Migration - Knowledge Badge Readiness Path': 'https://drive.google.com/file/d/1PTFsHGyHdwoOkFZVfYT5-FHYSFlUd5fB/view?usp=sharing',
    'Amazon Elastic File System (EFS) Performance': 'https://drive.google.com/file/d/1m8PUO1yWl9ajDs-AU7vtxwhdOBqFVQ_A/view?usp=sharing',
    'Amazon Simple Storage Service (Amazon S3) - Troubleshooting': 'https://drive.google.com/file/d/1VcEeslk95xsubS1-PIyrRVgC1QcVJ2Uy/view?usp=sharing',
    'Amazon Simple Storage Service (Amazon S3) Cost Optimization': 'https://drive.google.com/file/d/1LGsyPF_ZtjhnnnArwnPyFD1HiqNVwYBt/view?usp=sharing',
    'Amazon Simple Storage Service (Amazon S3) Performance Optimization': 'https://drive.google.com/file/d/1YFo4Vybjm1-nROvG-ARIGkBcvtkSUhFd/view?usp=sharing',
    'Amazon Simple Storage Service (Amazon S3) Storage Classes Deep Dive': 'https://drive.google.com/file/d/11rE8s7FP2V_Frl8JHwn-1nzAHF3yaCJe/view?usp=sharing',
    'Auditing Amazon Simple Storage Service (Amazon S3) Security': 'https://drive.google.com/file/d/1h8SiuV2TZl9dWGw3G5HIRQGTyL7egJy9/view?usp=sharing',
    'AWS Object Storage Services Getting Started': 'https://drive.google.com/file/d/1uBYKNyVBUWbKYtmB2VRA7XW8lxmlOQeb/view?usp=sharing',
    'AWS Storage Services - Portfolio Introduction': 'https://drive.google.com/file/d/19j_TZjgn8IFw1saDaM_US7ieLv8KL7zq/view?usp=sharing',
    'Building your First Quantum Circuit with Amazon Braket': 'https://drive.google.com/file/d/18PsIYipWEZisNXVpukPty8jTzUbuZt6y/view?usp=sharing',
    'Controlling the Network': 'https://drive.google.com/file/d/159y6_w2V_-Z0SEckCfFfWXtwX7a6iziJ/view?usp=sharing',
    'Deep Dive: Amazon Elastic Block Store (Amazon EBS) Cost Optimization': 'https://drive.google.com/file/d/1XvszEJFVbPLpJKPg_IEIU3z4BxJbFH97/view?usp=sharing',
    'Deep Dive: Architecting with Amazon Elastic Block Store (Amazon EBS)': 'https://drive.google.com/file/d/15AGVeLIp8EuAnLW4kPDanZxjP4KolSL9/view?usp=sharing',
    'Introduction to Amazon Elastic Block Store (Amazon EBS)': 'https://drive.google.com/file/d/1k1DOASYhpU_Ir0P9Ido160VrgLA4-Ody/view?usp=sharing',
    'Introduction to AWS Database Migration Service': 'https://drive.google.com/file/d/1I0bwr4cRDSj7ra_ROCLq6fJd3CC7C75p/view?usp=sharing',
    'Introduction to AWS Lambda': 'https://drive.google.com/file/d/1Vq7NBsLebT4p3oL-18-ftHe-3ffS92A1/view?usp=sharing',
    'Lab - Troubleshooting - IAM Access Issues': 'https://drive.google.com/file/d/1XaLEuNgpHpuS9kAFBf690ksNIdIqog_T/view?usp=sharing',
    'Managing Amazon Simple Storage Service (Amazon S3)': 'https://drive.google.com/file/d/1M8iVp0RJaJbDTdNl6rNhMIi05E1B0Ao4/view?usp=sharing',
    'Serverless - Knowledge Badge Readiness Path (includes Labs)': 'https://drive.google.com/file/d/1kscTMdEh9dvZFsrBgorw1KB5I5lKLgdD/view?usp=sharing',
    'Troubleshooting API Gateway with Lambda Proxy Integration': 'https://drive.google.com/file/d/1oOFE1g_gjuQmIpQAK3maAW1FM0mwkRmw/view?usp=sharing',
    'Amazon Braket - Knowledge Badge Readiness Path (includes labs)': 'https://drive.google.com/file/d/13MGWYe3hGfNsfYJ4Niqdgpp57ijXwLa1/view?usp=sharing',
    'Amazon Braket Getting Started': 'https://drive.google.com/file/d/17B7XDJ3KJuE01IDGt2xS2f_MEke_6Axf/view?usp=sharing',
    'Amazon Braket Knowledge Badge Assessment': 'https://drive.google.com/file/d/1SSHqBuMUUUOFv6C3C8WL_0FL5-X6HZf4/view?usp=sharing',
    'Amazon Braket Pre-assessment': 'https://drive.google.com/file/d/19g8u84zaBhWWZ2e8MPcQSPt7XrNox4ob/view?usp=sharing',
    'Amazon Braket Quantum Application Development': 'https://drive.google.com/file/d/1U0ZxOod5xAefK_0oQiAuUjXcU3a5o0VY/view?usp=sharing',
    'Amazon Connect - Infrastructure as Code Fundamentals': 'https://drive.google.com/file/d/1NDTI2wLK0P0MMPcdkGMo0yauKEy7otXA/view?usp=sharing',
    'Amazon Connect Custom Contact Control Panel Fundamentals': 'https://drive.google.com/file/d/1xaECdTWnFP4W5_Y3ae_vDKT3gfqkQy_L/view?usp=sharing',
    'Amazon Connect Custom Contact Control Panel Intermediate': 'https://drive.google.com/file/d/1TA_To7UK5OrYcOQ2kmP__URdcNXviaH5/view?usp=sharing',
    'Amazon Connect Flows Lambda Integrations Intermediate': 'https://drive.google.com/file/d/17nRzlWrSyt9jSnwaJ_5cb9GDuM3fSDxV/view?usp=sharing',
    'AWS CloudFormation Getting Started': 'https://drive.google.com/file/d/1mmQ_5CgMBiqRk53YvqHXX6LzY7GudLDF/view?usp=sharing',
    'AWS Database Migration Service (AWS DMS) Getting Started': 'https://drive.google.com/file/d/1HoxQvpLIOp_HwsNXWWPJmDWo5mmYYElI/view?usp=sharing',
    'AWS Migration Evaluator Getting Started': 'https://drive.google.com/file/d/1BYPnh4mMsMUD1Kw46ikwPZGGVVuFfvah/view?usp=sharing',
    'AWS Migration Hub Primer': 'https://drive.google.com/file/d/1EfY3Xqq_SMBWcePyZR6qG89kpemBEOry/view?usp=sharing',
    'AWS Security Champion - Knowledge Badge Readiness Path': 'https://drive.google.com/file/d/1AlQf3VmXjnNtP3gndCmprakXozFDCGW9/view?usp=sharing',
    'AWS Security Champion Badge Assessment': 'https://drive.google.com/file/d/1Bz0F9GKisPbADhdylBuKOXyu1yW5oqQw/view?usp=sharing',
    'Block Storage - Knowledge Badge Readiness Path (includes Labs)': 'https://drive.google.com/file/d/1Dl7zWy5q0jQOyFWGCqolylE115MzwquT/view?usp=sharing',
    'Block Storage Knowledge Badge Assessment': 'https://drive.google.com/file/d/1UC2AFvIKG-UVC3RCLoO3bIDiN6f40xuo/view?usp=sharing',
    'File Storage - Knowledge Badge Readiness Path (includes Labs)': 'https://drive.google.com/file/d/1MSZgCZOCdV2U1yyMebFnlepPQazuGQWJ/view?usp=sharing',
    'File Storage Knowledge Badge Assessment': 'https://drive.google.com/file/d/1W8fSheMVLM8vBdNGImAz9w4xke_AX1g8/view?usp=sharing',
    'Getting Started with AWS for Games – Part I': 'https://drive.google.com/file/d/1PUE5_kXjSWXP0ZXRKzzj0GT0bQsGVjE1/view?usp=sharing',
    'Getting Started with AWS for Games – Part II': 'https://drive.google.com/file/d/1S4TWfHyPAz7XYsEmGkhTxxRuMkCWF10V/view?usp=sharing',
    'Getting Started with Migration Hub Refactor Spaces': 'https://drive.google.com/file/d/186fh4nBxK59XLq3HouzDJ8n8VDaqXlgZ/view?usp=sharing',
    'Hosting WordPress Using Amazon S3': 'https://drive.google.com/file/d/1JraS5BCFa0OQlYfJWoemUxAoxmM-3hGk/view?usp=sharing',
    'Implementing Multi-Region Backup with Amazon S3 Cross-Region Replication': 'https://drive.google.com/file/d/1kuETyUi1XLxMOI4mD3dFaj9PZqbqzrtW/view?usp=sharing',
    'Introduction to Amazon Virtual Private Cloud (VPC)': 'https://drive.google.com/file/d/1rpAhZgH8d_pQZbZXf91iYviR-MrW-7pe/view?usp=sharing',
    'Introduction to AWS Application Migration Service': 'https://drive.google.com/file/d/1aT8lYN2hwnaVEyty7ZHuIAIo3ntU5Zv-/view?usp=sharing',
    'Introduction to AWS Cloud Game Development': 'https://drive.google.com/file/d/1PpCuj3kzsIHv_6is3mgpZ7l3bGSdakEw/view?usp=sharing',
    'Introduction to Serverless Development': 'https://drive.google.com/file/d/1nEFinmdYNfogEYMewLQ3ClqovbU2grAw/view?usp=sharing',
    'Lab - Create a Static Website with Amazon Simple Storage Service (Amazon S3)': 'https://drive.google.com/file/d/1VY4iURar7DOpwQ3w9lcrgH0ZAyQ0LD_b/view?usp=sharing',
    'Managing Access at Scale with Amazon S3 Access Points': 'https://drive.google.com/file/d/18eIUnbo1gEV4oFTOPmeo_KVeg_V5Ltsw/view?usp=sharing',
    'My Bucket, My Rules': 'https://drive.google.com/file/d/19gYTIwUA0XdVnAQZ0r7w2Yc5G9LYnz_o/view?usp=sharing',
    'S3 for Application Storage': 'https://drive.google.com/file/d/1SB3XGqXpKIwFuKCn_HGBq_Mh5JoTVCR5/view?usp=sharing',
    'Amazon Connect Developer Assessment': 'https://drive.google.com/file/d/1pUOiX9gMYEGZoGtZpZmFBhQ9acuLB-H3/view?usp=sharing',
    'Amazon Connect Developer Learning & Badge Plan': 'https://drive.google.com/file/d/1ILgBeSgflXB-x2Srm88JRjSDcDhB7ezo/view?usp=sharing',
    'Amazon Q Developer Command Line Interface (CLI)': 'https://drive.google.com/file/d/1xPsVfePm2XG-Lw0Mz34pYSMxjm9yC7oV/view?usp=sharing',
    'Amazon Q Developer Transformation': 'https://drive.google.com/file/d/15SxGJI3MzdVaGlkcHRQhXvN4WQtvso25/view?usp=sharing',
    'AWS Block Storage Services Getting Started': 'https://drive.google.com/file/d/1XxGgGCY0OutYetshhMgI1nmVj56D0xDA/view?usp=sharing',
    'AWS Elemental Live - Foundations': 'https://drive.google.com/file/d/1ULStLjHWI1UunTWnEJCk9xujOVOBd5sc/view?usp=sharing',
    'AWS File Storage Services Getting Started': 'https://drive.google.com/file/d/1UtDiOJPhtarxkZnNg7ssGmY2FJoekeF8/view?usp=sharing',
    'AWS Networking Basics': 'https://drive.google.com/file/d/1GhJnfXhc3uAe-OL7t_HXvCreW29OJm4d/view?usp=sharing',
    'AWS Skills Centers: Becoming an AI Practitioner - Part 5 - Implementing Generative AI': 'https://drive.google.com/file/d/1usA0zGi4lExsew8MsHWIITfMJBAwM5pc/view?usp=sharing',
    'Builder Labs: Implement Object Storage Solutions using Amazon S3': 'https://drive.google.com/file/d/1lRmL5vnttzCeSJ0ar5fpcr8WtpAfH6Ju/view?usp=sharing',
    'Customization in Amazon Q Developer': 'https://drive.google.com/file/d/1oh-oIw57zDMFtosjXFDGkncgZGN3Gulv/view?usp=sharing',
    'GitLab Duo with Amazon Q': 'https://drive.google.com/file/d/1gtEFtVhfUXIswoXyoSPQdzUlIL53nER-/view?usp=sharing',
    'Introduction to Amazon Q Developer (Technical)': 'https://drive.google.com/file/d/1QoSO_qm83rGwCG_s-izDQHNuO1W0J1hm/view?usp=sharing',
    'Introduction to AWS Media Services by Use Case': 'https://drive.google.com/file/d/1rBIOPHcvbACP5W2H6z2j4dPUvg9HYRwW/view?usp=sharing',
    'Managing Operations on AWS with Amazon Q Developer': 'https://drive.google.com/file/d/1XFLCUCu5QIwf8_CzdOEI1w468zBemdWO/view?usp=sharing',
    'Migration Foundations Knowledge Badge Assessment': 'https://drive.google.com/file/d/1kJFA6xNHJFX8LrggDS8jYT709u3wDUZ7/view?usp=sharing',
    'Migration Foundations Knowledge Badge Readiness Path (includes labs)': 'https://drive.google.com/file/d/1bBxuvv_so3pbIBRNfrK_bqNNaTStDYMS/view?usp=sharing',
    'Object Storage - Knowledge Badge Readiness Path (includes Labs)': 'https://drive.google.com/file/d/1ESGHnHqgC1YAD5AzJE5f3NBECKRnzLOr/view?usp=sharing',
    'Object Storage Knowledge Badge Assessment': 'https://drive.google.com/file/d/1buotxTlT5B3Uoy4y95j339KYX8KXX-Ph/view?usp=sharing',
    'Prompt Engineering with Amazon Q Developer': 'https://drive.google.com/file/d/1Vf6cHXCdvsXLK68Cz7OkXsidtPfiyBhk/view?usp=sharing',
    'Setup Amazon Q Developer': 'https://drive.google.com/file/d/1d4_8Whh3aBQ8Eg0fr7e2QSsM26v660dk/view?usp=sharing',
    'Software Development with Amazon Q Developer': 'https://drive.google.com/file/d/14V3Ak3VmboHqbmisFLQezkrApnxk5Se8/view?usp=sharing',
    'Video Streaming Concepts: AWS Media Services': 'https://drive.google.com/file/d/1h43mkzZXuoYBv3XBSlXEqnyA47TqAdmT/view?usp=sharing',
    'Amazon Q Developer Fundamentals Knowledge Badge Assessment': 'https://drive.google.com/file/d/1LE3g2FmgCKFLDk-7tcM8HKSMHSaBzY7f/view?usp=sharing',
    'Amazon QuickSight - Getting Started': 'https://drive.google.com/file/d/1LrTwzXk49rToruVrFjYFADW-rDSZUJAI/view?usp=sharing',
    'Amazon QuickSight Advanced Business Intelligence Authoring (Part 1)': 'https://drive.google.com/file/d/1S5RNws7sXmbgPvPvxLdNpZH0FtoSyBAf/view?usp=sharing',
    'Amazon QuickSight Advanced Business Intelligence Authoring (Part 2)': 'https://drive.google.com/file/d/1KkkDSwJ7GRr1Dvhx09ll3oS7b0UHigug/view?usp=sharing',
    'AWS Elemental Link - Getting Started': 'https://drive.google.com/file/d/1iictakHxHSGtrBJrYrxw0zQmtFHltd-c/view?usp=sharing',
    'AWS Elemental Statmux': 'https://drive.google.com/file/d/1QjBz0Tjl3Wn9P074QWL_BGQ0KGaWftFW/view?usp=sharing',
    'AWS Network Connectivity Options': 'https://drive.google.com/file/d/11fnBne2WVtyw6OHxhLHb2JWrbb7bp_O5/view?usp=sharing',
    'Building BI Dashboards with Amazon QuickSight': 'https://drive.google.com/file/d/1tb-L3BvvqXtxyFiErXGkWg7_pFFATUFL/view?usp=sharing',
    'Building Event-Driven Applications With Amazon EventBridge': 'https://drive.google.com/file/d/1NtMvg9nh_Y_pM3VvQuTk6hvJGDdM4FgW/view?usp=sharing',
    'Configuring and Deploying VPCs with Multiple Subnets': 'https://drive.google.com/file/d/1EVreqd8pyPpumAmSxe9OLH_EXGfGKK-y/view?usp=sharing',
    'Design Patterns for AWS Step Functions': 'https://drive.google.com/file/d/1Qg0iYbYcU0ulsF9IVm-__d767DwKWFoE/view?usp=sharing',
    'Developer Tooling for AWS Step Functions': 'https://drive.google.com/file/d/1_hHbJUUlfZzt1TY18Bq5TtX6AxwrXTae/view?usp=sharing',
    'Digital Rights Management and the SPEKE Protocol in Video Workflows': 'https://drive.google.com/file/d/1CCT4z0URc513heRQIcviHamUcFgxvOIh/view?usp=sharing',
    'Event Driven Architecture with Amazon API Gateway, Amazon EventBridge and AWS Lambda': 'https://drive.google.com/file/d/1homgd0s_NPtxQoKGLpZMhH9sFWxGWZxv/view?usp=sharing',
    'Events and Workflows - Knowledge Badge Readiness Path (includes labs)': 'https://drive.google.com/file/d/1TjaGCHQm_49kZZnN17Ku4cKPAEaD1bmv/view?usp=sharing',
    'Events and Workflows Knowledge Badge Assessment': 'https://drive.google.com/file/d/1pvRaJ2-vxcOskU8WBmE5-04A4YqIOaze/view?usp=sharing',
    'Events and Workflows Pre-assessment': 'https://drive.google.com/file/d/1HjQO2fW2MNHIOmVIjYyaPkwBveliMnld/view?usp=sharing',
    'Generative BI with Amazon Q in Quicksight - Getting Started': 'https://drive.google.com/file/d/1XS-VT6B-chnOyMbEsAdkEJIFIcftnG1W/view?usp=sharing',
    'How AWS Step Functions Work': 'https://drive.google.com/file/d/1dpcF3SIdLT7hSv7_boY6AdrTK5mLjb8_/view?usp=sharing',
    'Introduction to Amazon CloudFront': 'https://drive.google.com/file/d/1kp-3rQiDj86dwvZSV-veyFZkENrlFwWp/view?usp=sharing',
    'Introduction to Amazon Direct Connect': 'https://drive.google.com/file/d/1JXNKXYTq_54kXwx31W8fIBXknOjJD8YP/view?usp=sharing',
    'Introduction to AWS Elemental MediaConnect': 'https://drive.google.com/file/d/1xpXNtz4CU8-lykQzcp1tO4pDCGZoDcls/view?usp=sharing',
    'Lab - Create Interactive Dashboards with Amazon QuickSight': 'https://drive.google.com/file/d/1kUyHjrnh5ird0hiPesmEbZ6c6L4wWA4N/view?usp=sharing',
    'Lab - Exploring the Generative Business Intelligence Features in Amazon QuickSight': 'https://drive.google.com/file/d/12viZkossg7SEjVcyJr00VawyZCIxAFYp/view?usp=sharing',
    'Observability for AWS Step Functions': 'https://drive.google.com/file/d/1OLMM9dkPsqF6RC8Ri7p41HCWe2v9bpXT/view?usp=sharing',
    'Subnets, Gateways, and Route Tables Explained': 'https://drive.google.com/file/d/1TbqYr-0qovaaHb5vM2a9SvJwJpCQW4gZ/view?usp=sharing',
    'Advanced SQL and Database Design': 'https://drive.google.com/file/d/19KNLt2iX5kQ175522Qf2diyXq6rGigLq/view?usp=sharing',
    'Amazon Aurora Serverless V2': 'https://drive.google.com/file/d/1SLKwNpPO0SsJwwdPbY7RzQiurFygmIqk/view?usp=sharing',
    'Amazon Connect Agent Applications Fundamentals': 'https://drive.google.com/file/d/1-5Ur5YYfx_fgAp2F1Gta2WaBVvpBicB6/view?usp=sharing',
    'Amazon Connect Chat and Messaging Fundamentals': 'https://drive.google.com/file/d/1PFcnNVm8TIGu3OKY873CeW9y7-lddc6q/view?usp=sharing',
    'Amazon Connect Chat and Messaging Intermediate': 'https://drive.google.com/file/d/1B-M-7vtSVvbc4yZ3l1X06Na94lklhBKD/view?usp=sharing',
    'Amazon Connect Console Fundamentals': 'https://drive.google.com/file/d/1qPeNSOrWEIa3CuF0FbDTGkmFosC7tW_-/view?usp=sharing',
    'Amazon Connect Contact Lens Fundamentals': 'https://drive.google.com/file/d/1jjSeiY98TdvK3NajvXNraUnCpKP9kedt/view?usp=sharing',
    'Amazon Connect Conversational Interfaces Fundamentals': 'https://drive.google.com/file/d/1_PqsStTflg8Sje40tTo6NKNOjk-wTnJa/view?usp=sharing',
    'Amazon Connect Conversational Interfaces Intermediate': 'https://drive.google.com/file/d/1E6UuprN1y3X7SMUEJS4OZ1r73c9wiTuO/view?usp=sharing',
    'Amazon Connect Customer Profiles Fundamentals': 'https://drive.google.com/file/d/1B63wzEyddivunGLmdMjlifDP3qBZ5q9u/view?usp=sharing',
    'Amazon Connect Flow Modules and Step-by-Step Guides': 'https://drive.google.com/file/d/1-3h3SRpMxrmLmsirPn3sQoyrLI1tjWAR/view?usp=sharing',
    'Amazon Connect Flows Fundamentals': 'https://drive.google.com/file/d/1PTnhoSQyms0a0gPidF9OXJQTt-yGE15O/view?usp=sharing',
    'Amazon Connect Flows Intermediate': 'https://drive.google.com/file/d/1nC4wSbp7s42nm_o4POjVZvZ0kt0uq9NM/view?usp=sharing',
    'Amazon Connect Instance Fundamentals': 'https://drive.google.com/file/d/1rmaxW2P_ZE4ay-UqMjbHQsKCvGoNWMwn/view?usp=sharing',
    'Amazon Connect Introduction': 'https://drive.google.com/file/d/1ROy2cnq8DPieRQ9L2qmDHdBL4R2DPyuu/view?usp=sharing',
    'Amazon Connect Optimizing Routing Solutions': 'https://drive.google.com/file/d/1N4Z2q4rXQLwfUxTvqdb_g-o0ywXvj9Ch/view?usp=sharing',
    'Amazon Connect Routing Fundamentals': 'https://drive.google.com/file/d/1jvBUJwrjQ0thS8s48gzHfGxSKgh_Syrv/view?usp=sharing',
    'Amazon Connect Routing Intermediate': 'https://drive.google.com/file/d/14bdHgGFDINEH3v5cyoH9nXIPu23B5Ird/view?usp=sharing',
    'Amazon Lex Getting Started': 'https://drive.google.com/file/d/15k3hZU8Vy5paQnUTdWSG8gDmw7lLJG-c/view?usp=sharing',
    'Application Load Balancer Getting Started': 'https://drive.google.com/file/d/1d7E5rLBwKjiFm-aQLaNiImBcIhM_aEX2/view?usp=sharing',
    'AWS Elemental Live - Advanced': 'https://drive.google.com/file/d/1YDxoen2ebUxH-uXKxhAORN7z8Gb_5-kJ/view?usp=sharing',
    'AWS Elemental Live - Conductor': 'https://drive.google.com/file/d/12WC3AhRUjx51n8rPbopHgpsDD-epQRDt/view?usp=sharing',
    'AWS Elemental MediaConvert Primer': 'https://drive.google.com/file/d/10OqHAC5q5xZ-ZAuP9Tp-_FAiuo5cGgdF/view?usp=sharing',
    'AWS Elemental MediaLive Primer': 'https://drive.google.com/file/d/1Rs8tq_WvuY1C10P3V13ER3JA6TwQV8-g/view?usp=sharing',
    'AWS Networking Practical Approaches': 'https://drive.google.com/file/d/1h_AVN2e8ftbgMcqJ4l3Ht1cWos7N8qxp/view?usp=sharing',
    'Building Your First Amazon Virtual Private Cloud (VPC)': 'https://drive.google.com/file/d/1vKVIoPmV-F7iFyf6SvRI0LXTcYKgaRk1/view?usp=sharing',
    'Caching Static Files with Amazon CloudFront': 'https://drive.google.com/file/d/1aF5xQiDMKbSZJgBftuRR9CYL7tsiIZ1K/view?usp=sharing',
    'Comparing Amazon Virtual Private Cloud (VPC) Peering and AWS Transit Gateway': 'https://drive.google.com/file/d/1_d26-vLDxHgZLZ2q-3A-QqJqKtomUzwu/view?usp=sharing',
    'Configure and Deploy AWS Client VPN': 'https://drive.google.com/file/d/1qgO_m5hajUHMTDiqYV6JWx9XgGk8r_1b/view?usp=sharing',
    'Configure and Deploy AWS PrivateLink': 'https://drive.google.com/file/d/1Abia3x1tPniG18VwZoSexgovuuiPLmda/view?usp=sharing',
    'Configuring and Deploying Amazon VPC for a 3-tier Web App': 'https://drive.google.com/file/d/1HGLuwV_Ajz0GbP3v5OQj7eEVQE75l93t/view?usp=sharing',
    'Gateway Load Balancer Getting Started': 'https://drive.google.com/file/d/1-1xDRhNST6ecBI339jqhQwj7_FPqaqyR/view?usp=sharing',
    'Introduction to Amazon API Gateway': 'https://drive.google.com/file/d/1BY-A3xXiLGSKzXed-lX5w5l7s99QNkhl/view?usp=sharing',
    'Introduction to Amazon VPC Lattice': 'https://drive.google.com/file/d/1JOY511uumZG_Pn-XyxrlWTvAS2Vq47x3/view?usp=sharing',
    'Introduction to AWS Cloud WAN': 'https://drive.google.com/file/d/1Cy8K-F3ebUt18WxYMk1qgi4VpZkAitYv/view?usp=sharing',
    'Introduction to AWS Global Accelerator': 'https://drive.google.com/file/d/1e_r2y5AKopfxKYy8RJe5Iqfi7fTblxLh/view?usp=sharing',
    'Network Load Balancer (NLB) Getting Started': 'https://drive.google.com/file/d/1AXcqwqwGRSp17szc81CgUnDqLBr0a-vy/view?usp=sharing',
    'PostgreSQL for Amazon Aurora and RDS (Advanced) Learning Plan - Introduction': 'https://drive.google.com/file/d/1c-v0v21HG78j7v5PB7tFCRdB8UemPnup/view?usp=sharing',
    'Resolve VPC Routing Conflicts': 'https://drive.google.com/file/d/1ahIyWKCqYee6Q_EOqJdS1BDO-3NVQrG2/view?usp=sharing',
    'Working with Amazon CloudFront for Dynamic Content Acceleration': 'https://drive.google.com/file/d/1QzPJuBDFCtzFB4pPEiwOGtR_CcRctqNe/view?usp=sharing',
    'Working with Elastic Load Balancing': 'https://drive.google.com/file/d/16EFH4e6gQ5DDPZtKm4XZKCtqlz7KU249/view?usp=sharing',
    'Advanced features of Amazon Aurora PostgreSQL (Part 1)': 'https://drive.google.com/file/d/1tc_YPSmPRF5u4wtgiPXvClBpUv9gf0nN/view?usp=sharing',
    'Advanced features of Amazon Aurora PostgreSQL (Part 2)': 'https://drive.google.com/file/d/1-m8SO9edYLCcQOGlNIpGhTqo7OdVf5eK/view?usp=sharing',
    'Amazon Business Intelligence Developer Knowledge Badge Assessment': 'https://drive.google.com/file/d/1JWgwhFIWiKjVKDUwTAg_nDt3tBz7IKxz/view?usp=sharing',
    'AWS Business Intelligence Knowledge Badge Readiness Path': 'https://drive.google.com/file/d/1s5H3kKCZnnPTvSO5r1OG2VPe2H_9wOxu/view?usp=sharing',
    'Database Upgrades': 'https://drive.google.com/file/d/19DR-TW5Zn0f4Y8abOHDqUSOB91qYfivT/view?usp=sharing',
    'Effortless Relational Scalability with Amazon Aurora Serverless v2': 'https://drive.google.com/file/d/16V7vYjg-3nKv0cCOs0f_g6n84U-1b-AD/view?usp=sharing',
    'Networking Core - Knowledge Badge Readiness Path (includes labs)': 'https://drive.google.com/file/d/1JmGVOgHLEx-EXQVNM4hfqUnsGJEC9a5B/view?usp=sharing',
    'Networking Core Knowledge Badge Assessment': 'https://drive.google.com/file/d/1JU6lUjDiRto3aNZRUlfsuPNHz1FooO4O/view?usp=sharing',
    'PostgreSQL Extensions': 'https://drive.google.com/file/d/13nBJmJwYmIRowvnA3Xyg9HU7szlAg8AW/view?usp=sharing',
    'PostgreSQL Maintenance': 'https://drive.google.com/file/d/1wxmhEwMnnm5DHoN9-2DnE8OIicwf7oQv/view?usp=sharing',
    'PostgreSQL Performance Tuning and Optimization': 'https://drive.google.com/file/d/1Dzl2yvpnmAMgMMuVDCKas_RU1vv5YJup/view?usp=sharing',
    'PostgreSQL Replication': 'https://drive.google.com/file/d/1oz2uEfUWpOmaLN_S6tZ2MWWbPcsKKlV6/view?usp=sharing',
    // AWS Educate
    'AWS Emerging Talent Community Digital Badge': 'https://drive.google.com/file/d/1VfedhXauOo5Ayyv04Okjiu-88eYQ5VWK/view?usp=sharing',
    // Datadog
    'WORKSHOP: Monitoring Your Kubernetes Cluster with Datadog': 'https://drive.google.com/file/d/1S8WmEBQ4jn0jozzDZUE5blQncM-y3Rr6/view?usp=sharing',
    'Getting Started with APM Metrics & Traces': 'https://drive.google.com/file/d/1B2f0XtWKPIeUnpjGCQu0_SyE37UhMmKG/view?usp=sharing',
    'Getting Started with Infrastructure and Cloud Network Monitoring': 'https://drive.google.com/file/d/1wAvvWsyKv1TLTPCGpDa9Sn0i6xY5KAY7/view?usp=sharing',
    'Getting Started with Integrations': 'https://drive.google.com/file/d/1ID9HodJ8aUAhpJ9HkAd-aPDAj8I_c3Wx/view?usp=sharing',
    'Getting Started with Service Level Objectives (SLOs)': 'https://drive.google.com/file/d/18G_tdocBxy2f7haWH8LWUHyS1a-Q_EgP/view?usp=sharing',
    'Getting Started with Universal Service Monitoring (USM)': 'https://drive.google.com/file/d/1D7FKKKVAZDLkkMsvDAcEnfIXq5k_ncg4/view?usp=sharing',
    'Introduction to Incident Management': 'https://drive.google.com/file/d/1HvE4tyfgNmcMVtsR_-0Pjm7rHIFCKlnA/view?usp=sharing',
    'Tagging Best Practices': 'https://drive.google.com/file/d/1aptTAnlWSk13WZ-HMqXJ1sPPPgBC0Ira/view?usp=sharing',
    'The Agent on a Host': 'https://drive.google.com/file/d/1TEoHKNQv8ST5BzMf4Ns3yiCs0BlxIShY/view?usp=sharing',
    'The Agent on Docker': 'https://drive.google.com/file/d/1koZ7W4lHp7WhpWsPOuB84eGlwz0Mg8TX/view?usp=sharing',
    'Getting Started with Kubernetes Observability': 'https://drive.google.com/file/d/1p4l9R3G1fnzPDQLVh8diz8xo-14Jh60k/view?usp=sharing',
    'Monitoring a Kubernetes Cluster: Install the Agent': 'https://drive.google.com/file/d/1UDagqKsaBHd32qgaVmbz9hVnZirPYmjh/view?usp=sharing',
    'Monitoring a Kubernetes Cluster: The Control Plane': 'https://drive.google.com/file/d/1e9nQzuh4P2D89pKkzYNtR4BLRhjfWT1s/view?usp=sharing',
    'Monitoring a Kubernetes Cluster: Troubleshooting Workloads': 'https://drive.google.com/file/d/1YfymqN6dCtas4nNIrOvVnjSlE7aTeov4/view?usp=sharing',
    'Progressive Delivery in Kubernetes': 'https://drive.google.com/file/d/1VkDU02_YQWAMgEjRulxfoH6EbJ1Xz5RM/view?usp=sharing',
    'Block Application Attacks with Application & API Protection': 'https://drive.google.com/file/d/1tF9Biu1XyBQmMKnaLPn-N96hNVLgwOWu/view?usp=sharing',
    'Detect Host and Container Compromises with Workload Protection': 'https://drive.google.com/file/d/1hhO4cuV6efOxwQTkotg-QlMa9Ok2S4IH/view?usp=sharing',
    'Detect Web Application Attacks with App & API Protection': 'https://drive.google.com/file/d/1rjhbBHUEIspAuJaPH0r4-3hn8LreT2AU/view?usp=sharing',
    'Find and Remediate Vulnerable Cloud Resources with Cloud Security Miscon gurations': 'https://drive.google.com/file/d/1yclvEVPdpr9m7vfrO2a3exlzfZRD4awi/view?usp=sharing',
    'Configure Log Collection for a Containerized Application': 'https://drive.google.com/file/d/1A2GWQv5-vCtw92EtsIIPLD2W1FQ7jBde/view?usp=sharing',
    'Detect and Investigate Threats with Cloud SIEM': 'https://drive.google.com/file/d/195SodygBj-K488SR4tnpBshl56fDRGhO/view?usp=sharing',
    'Diagnosing Application Bugs with Datadog APM': 'https://drive.google.com/file/d/1kss3gV-_AAZWjUOyvRMruICoioSgi40m/view?usp=sharing',
    'Discovering Graph Widgets': 'https://drive.google.com/file/d/13JlOk4o5qHKrtvw86QfBTs72_lp0S_AK/view?usp=sharing',
    'Discovering Table, List, SLO, and Architecture Widgets': 'https://drive.google.com/file/d/1OcZPLRItsMtXjlXwY9RYtgqh2BARO1Qb/view?usp=sharing',
    'Getting Started with Log Explorer': 'https://drive.google.com/file/d/1Dp3X52J1oTQFpoOx8WzogS8bYxl2y8Gq/view?usp=sharing',
    'Introduction to Dashboards': 'https://drive.google.com/file/d/1VUCvEpQTnmEKJtJMu1w8hRcAFG7Bo7sv/view?usp=sharing',
    // Programming and Development
    'Python Programming Course': 'https://drive.google.com/file/d/1iOYorgZhAb2gKKrdrOwmoPZ-G20-fJm5/view?usp=sharing',
    'Introduction to PHP': 'https://drive.google.com/file/d/15rmGabCvxXyewU4jv7FDN5Wb8Cfajq8I/view?usp=sharing',
    'Introduction to C Programming': 'https://drive.google.com/file/d/1yw2DlMcZJ4Cr-qEsOJYv10l727N8vDlk/view?usp=sharing',
    'Introduction to C 2019 Programming': 'https://drive.google.com/file/d/1iWDgwxAPDp3HharMdOnYkpMHSRQxCte7/view?usp=sharing',
    'Introduction to C++ Programming': 'https://drive.google.com/file/d/1TCmyewLN5ejt9sds6dgKCNpEo88t3ANR/view?usp=sharing',
    'Java Fundamentals Diploma': 'https://drive.google.com/file/d/1BszqEWhStHhC40B0zri-gvSu5knJoVqb/view?usp=sharing',
    'Python Programming': 'https://drive.google.com/file/d/1SViDxXc3UgpLPm0PlpcCl4_gewyrqF5o/view?usp=sharing',
    'XHTML - XML - CSS': 'https://drive.google.com/file/d/1XkXv6Iucqa2Uc-5Y8UvEn_sYRdeppwnR/view?usp=sharing',
    'How to Program for Entrepreneurs - HTML and CSS': 'https://drive.google.com/file/d/1GCxCq0P8tS7OV0_rJxwd7vPnt_ai7iQ4/view?usp=sharing',
    'C++ Programming in Microcontrollers and Arduino': 'https://drive.google.com/file/d/1vjK-TDNgJn2Rmf5RSXrMXlcLUJzrZzZC/view?usp=sharing',
    // DevOps and System Administration
    'CentOS and Red Hat Linux to Certified System Administrator': 'https://drive.google.com/file/d/1GVrAmYFpxi5J5KCt6kHMvSBSVnJvP27a/view?usp=sharing',
    'Cybersecurity Awareness Training': 'https://drive.google.com/file/d/1kREOS-eUvGzy-WtetIxIUSyBvmYjVcgF/view?usp=sharing',
    'AWS Cloud Practitioner': 'https://drive.google.com/file/d/1IBzwop6xuIwthtj4ekVUYFNZ9KJPSZvj/view?usp=sharing',
    'AI-050: Developing Generative AI Solutions with Azure OpenAI Service': 'https://drive.google.com/file/d/1U3SxtObAOBWOih-9d_49S5Te6vcgqRs6/view?usp=sharing',
    'AZ-900: Microsoft Azure Fundamentals': 'https://drive.google.com/file/d/1Zfqe17GM-GMR0fmJ4kwfXVB1IQ_BNSc5/view?usp=sharing',
    'Linux Unhatched': 'https://drive.google.com/file/d/115Y20qu621EpzW8EvQxc_d_aejmwT4-t/view?usp=sharing',
    'AWS SysOps Administrator': 'https://drive.google.com/file/d/1uQsDLsi0OdKlsW8qL01w122kte3qyzrl/view?usp=sharing',
    'Introduction to Amazon Elastic Compute Cloud (EC2)': 'https://drive.google.com/file/d/1oQAaO3L9Be_I4gOOPFqGYvZwdClXMM-3/view?usp=sharing',
    'Introduction to Amazon EC2 Systems Manager': 'https://drive.google.com/file/d/1nQ0wsLqdspmOdkuMVUQrZMBkAqUIHrIB/view?usp=sharing',
    'AWS Skills Centers: Becoming a Cloud Practitioner - Part 4 - Advanced Cloud Services': 'https://drive.google.com/file/d/1PtBvECp3805LLQPp9kTfyO_E-duu5BY4/view?usp=sharing',
    'Introduction to DevOps and Site Reliability Engineering (LFS162)': 'https://drive.google.com/file/d/1B6ePF833wjpQR1piN3pnO6YUC9gbyUkY/view?usp=sharing',
    'Introduction to Jenkins (LFS167)': 'https://drive.google.com/file/d/1r__P9OKIu-jSN5q_SQafWQB9QZQuJlvI/view?usp=sharing',
    'Microsoft Cybersecurity Architect': 'https://drive.google.com/file/d/137FNZLVLGV9qTM9ZCuFlGKPr75zvil3b/view?usp=sharing',    
    // Data Analysis and Statistics
    'Introduction to R Course': 'https://drive.google.com/file/d/1xzaDcNZYgERPW8fngKaPr-0ktpbpyaUW/view?usp=sharing',
    'Intermediate R Course': 'https://drive.google.com/file/d/1jSRplNzpii1XcNQEGGWSw3cewiI20w4f/view?usp=sharing',
    'Writing Functions in R Course': 'https://drive.google.com/file/d/1vUaRkcAIMWV70mudoYY7VQnxCVOggNx3/view?usp=sharing',
    'Reporting with R Markdown Course': 'https://drive.google.com/file/d/1Phkd_LHAve88XrCxDxe5qAmBns6R4gMC/view?usp=sharing',
    // Web Development and Digital Marketing
    'Web Assistant': 'https://drive.google.com/file/d/1-qR6M74LRdFzWa_hZNe1BBYr4yqkzj8C/view?usp=sharing',
    'Introduction to Web Development I': 'https://drive.google.com/file/d/1XgKOw3sRPb0CKjB2-i6GYao6IIpPYDUz/view?usp=sharing',
    'Introduction to Web Development II': 'https://drive.google.com/file/d/1BvatQuwR_D0HYSfRaSPJwXqTGT3mZNSR/view?usp=sharing',
    'Digital Marketing Fundamentals Course': 'https://drive.google.com/file/d/1G9KPMsAvkmUftRLzYKpi7JLVV0PTBhz9/view?usp=sharing',
    'Frontend Roadmap': 'https://drive.google.com/file/d/1MggVenWJDISLi1t1SzXBRKT0NZYjIhm3/view?usp=sharing',
    // Agile and Project Management
    'Scrum Fundamentals Certified': 'https://drive.google.com/file/d/16T6nB6rjPnGgSVinPE-savuRAZo6kfa3/view?usp=sharing',
    // Entrepreneurship and Business
    'Lean Startup: Develop Your Business Model': 'https://drive.google.com/file/d/16chhTaAmk3eiSdPASKkEQua6Q6LHjcVj/view?usp=sharing',
    'Strategic Sectors in Digital Key': 'https://drive.google.com/file/d/1vsfg_Ai6WZ3CiFQT-VmX-zXs2UE1bcZ2/view?usp=sharing',
    'E-Commerce for Entrepreneurs': 'https://drive.google.com/file/d/1ZXExv9G8215KkB82y1unFp2vkMbD0BkC/view?usp=sharing',
    'Entrepreneurship in Silicon Valley': 'https://drive.google.com/file/d/1pqIlFfrooVPsGUfrophgnJt6CH8lzDPZ/view?usp=sharing',
    'Basic Personal Finance Course: Finance for Mortals': 'https://drive.google.com/file/d/1_wYxdrLeUzb5Y9bO3CEctrQXGBMtr6Bg/view?usp=sharing',
    'Business Training Certificate - BOD Entrepreneurs Center': 'https://drive.google.com/file/d/1d0G9j3LLFkTg1-yms00Fisi5MySMnXOe/view?usp=sharing',
    'Resources and Tools for Entrepreneurship': 'https://drive.google.com/file/d/1JjALYNzDUa5ehGiYNFUjq9e2JZJNFsrn/view?usp=sharing',
    'Legislation for Entrepreneurs': 'https://drive.google.com/file/d/1oOFngW7wFx9IggYZ-BCCg95G1Uqt6K4-/view?usp=sharing',
    'Dare to Act': 'https://drive.google.com/file/d/13u1rdV-pRPG2iZaGHVgsq0CqhHCN9kWf/view?usp=sharing',
    'Idea Generation': 'https://drive.google.com/file/d/18tb8m7oeN6jQ9rfWkOpFPzHAlzx1N8kY/view?usp=sharing',
    'YUZZ, Your Springboard to Entrepreneurship': 'https://drive.google.com/file/d/1uSIs4kSE-OE608qmmBh5ar6F-nqPeMQE/view?usp=sharing',
    'Being an Entrepreneur': 'https://drive.google.com/file/d/1IoPbr3d-atz-b1ehIe97C00Gwox88_cm/view?usp=sharing',
    'Entrepreneurship in Cultural and Creative Industries': 'https://drive.google.com/file/d/1nlMnpCJ9oHWRezkN3aSdsCESvSr82HrR/view?usp=sharing',
    'Activate Entrepreneurship Path': 'https://drive.google.com/file/d/1OR-WyS67Lovd2aVrTYqTcGyH9EXT6NAc/view?usp=sharing',
    // Events and Specialized Conferences
    'World Plone Day Venezuela 2011': 'https://drive.google.com/file/d/1M8kLMLbmw25RAJCWhberx8CSyJBkttUd/view?usp=sharing',
    'Virtual DTIC Meeting 2012': 'https://drive.google.com/file/d/1qyyI_YTj6tS_6uyfcyC5LrAM97I4seP1/view?usp=sharing',
    'II Virtual DTIC Meeting 2013': 'https://drive.google.com/file/d/1XbsFJt8zDyPH5QQgt7PGUKvq7B4lNbB4/view?usp=sharing',
    'III Virtual DTIC Meeting 2014': 'https://drive.google.com/file/d/1zp3g5Yu5A-muUnCDG4-6AGoszsnkeZZb/view?usp=sharing',
    'JIS Go Live 2020 - XV Health Informatics Conference': 'https://drive.google.com/file/d/1FxJQbE89BSG5AcHudbnlcaZUltkgFrT_/view?usp=sharing',
    'DIDACTICBOTS Research Project Launch Conference': 'https://drive.google.com/file/d/1EjV1SbafUOl4WUxklSCfjZBN6QZs8Edw/view?usp=sharing',
    'Artificial Intelligence Workshop': 'https://drive.google.com/file/d/1cKOLq0UvYMYzRoEl1yRr8TTf1FEdrTXq/view?usp=sharing',
    'Human and Productive Skills Seminar for Business Reactivation': 'https://drive.google.com/file/d/1kJe736lmPWUpcB75eexC_WOfNTlpV7y2/view?usp=sharing',
    'II Latin American Meeting on Free Knowledge and Licensing': 'https://drive.google.com/file/d/1N6aep_t0KBBIwJF9PiyYWn3hTxb7lmlG/view?usp=sharing',
    '1st National Meeting of Free Software Entrepreneurs': 'https://drive.google.com/file/d/1lcpwHctIzL7fF8DNfrDTTmHt21vlq-jP/view?usp=sharing',
    'First Free Technologies Conference': 'https://drive.google.com/file/d/1Q0kXOEt2UtEgTh1lWdGqTfh4hEpJwZGx/view?usp=sharing',
    'Recognition - "Youth and Leadership" Training Workshop': 'https://drive.google.com/file/d/1URiRH63v8PgF2qDQkMi9Srv3372_Urzy/view?usp=sharing',
    'ULA Business Fair 2007 - Mérida: Best Investment Option': 'https://drive.google.com/file/d/11CWdbZ7G2vetertR56UOAWhR5VQmXBqD/view?usp=sharing',
    'ULA Business Fair 2007 - Social Technological District PDVSA': 'https://drive.google.com/file/d/1kNQZJf4FxRIyK7tJCWGTVt3jQs9SddUB/view?usp=sharing',
    'ULA Business Fair 2007 - Realize Your Entrepreneurial Potential': 'https://drive.google.com/file/d/1dMGX1Sk5vhhP4Vm1Oz25YyJZx88_daxo/view?usp=sharing',
    'ULA Business Fair 2007 - Youth Profile in Industry - Ternium SIDOR': 'https://drive.google.com/file/d/1pnNXADb_QszQ_nUbMneXicZ3r77QN_Xu/view?usp=sharing',
    'ULA Business Fair 2007 - Venezuelan Business Fabric Reconstruction': 'https://drive.google.com/file/d/1c4HWYwSZEz3FO2JMrOTjir2Nsz2fbK5V/view?usp=sharing',
    '4th DevSecOps Fest BCP 2023': 'https://drive.google.com/file/d/1RfaomrHzcUj7Qq3lzI-Juab6Vux7Wtbh/view?usp=sharing',
    // Compliance and Risk Management
    'Workplace Harassment Prevention and Labor Coexistence Committees': 'https://drive.google.com/file/d/1rp0UvTzjnSvnMXfU6h_uL5HpnHmBI3tk/view?usp=sharing',
    '50-hour Virtual Training in OSHMS': 'https://drive.google.com/file/d/1GZDlA2ayX6phpxXQfewsfP_ydUwJYINJ/view?usp=sharing',
    'Module 1: Organization of the OSHMS': 'https://drive.google.com/file/d/1MMvhXtDl97PLf-4-STvNi400tVbdKGn1/view?usp=sharing',
    'Module 2: Planning of the OSHMS': 'https://drive.google.com/file/d/1Os1cBbZkt5Y1yqHzmw-j1D7qhMP_gsHV/view?usp=sharing',
    'Module 3: Implementation of the OSHMS': 'https://drive.google.com/file/d/16KMiDQPbOKl17pIE3i-1pnieLNurfMQ0/view?usp=sharing',
    'Module 4: Verification of the OSHMS': 'https://drive.google.com/file/d/1p51EQiR39SvZHeMuQpOYZvSLb7UFCn_2/view?usp=sharing',
    'Module 5: Improvement of the OSHMS': 'https://drive.google.com/file/d/1hgoj6lGTIfiP4J4ST80uaC-xQ5ESvLAy/view?usp=sharing',
    'SURA Policies and Guidelines': 'https://drive.google.com/file/d/1ZVhGyk68yi-ep6I-u4r-Zh3PLY_staSU/view?usp=sharing',
    'Basic Information Security Concepts': 'https://drive.google.com/file/d/1h-TBK81nIbbocEtotU-mgykuuackghVR/view?usp=sharing',
    // 'Certificate Name': 'Google Drive Link',
};

// Function to convert Google Drive share link to embed link
function getEmbedLink(shareLink) {
    if (!shareLink) return '';
    const fileIdMatch = shareLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return shareLink;
}

// Filter functionality
function filterCerts(category) {
    // Update active button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category || 
            (btn.textContent === 'All' && category === 'all')) {
            btn.classList.add('active');
        }
    });

    // Filter sections and rows
    const sections = document.querySelectorAll('.section');
    const noResults = document.getElementById('noResults');
    let hasVisibleCerts = false;

    sections.forEach(section => {
        const sectionCategory = section.getAttribute('data-category');
        const rows = section.querySelectorAll('.cert-row');
        let hasVisibleRows = false;

        if (category === 'all') {
            section.style.display = 'block';
            rows.forEach(row => {
                if (!row.classList.contains('search-hidden')) {
                    row.classList.remove('hidden');
                    hasVisibleRows = true;
                    hasVisibleCerts = true;
                }
            });
        } else {
            if (sectionCategory === category) {
                section.style.display = 'block';
                rows.forEach(row => {
                    if (!row.classList.contains('search-hidden')) {
                        row.classList.remove('hidden');
                        hasVisibleRows = true;
                        hasVisibleCerts = true;
                    }
                });
            } else {
                section.style.display = 'none';
            }
        }

        // Hide section if no visible rows
        if (!hasVisibleRows && section.style.display !== 'none') {
            section.style.display = 'none';
        }
    });

    // Show/hide no results message
    noResults.style.display = hasVisibleCerts ? 'none' : 'block';
}

// Search functionality
function searchCerts(searchTerm) {
    const term = searchTerm.toLowerCase();
    const rows = document.querySelectorAll('.cert-row');
    const sections = document.querySelectorAll('.section');
    const noResults = document.getElementById('noResults');
    let hasResults = false;

    rows.forEach(row => {
        const name = row.querySelector('.cert-name').textContent.toLowerCase();
        const org = row.querySelector('.cert-org').textContent.toLowerCase();
        
        if (name.includes(term) || org.includes(term)) {
            row.classList.remove('search-hidden');
            if (!row.classList.contains('hidden')) {
                hasResults = true;
            }
        } else {
            row.classList.add('search-hidden');
            row.classList.add('hidden');
        }
    });

    // Update sections visibility
    sections.forEach(section => {
        const visibleRows = section.querySelectorAll('.cert-row:not(.hidden)');
        section.style.display = visibleRows.length > 0 ? 'block' : 'none';
    });

    // Show/hide no results message
    noResults.style.display = hasResults ? 'none' : 'block';

    // If search is cleared, reapply current filter
    if (term === '') {
        const activeFilter = document.querySelector('.filter-btn.active');
        const category = activeFilter.textContent.toLowerCase();
        filterCerts(category);
    }
}

// Certificate view functionality
function viewCertificate(name, org, date) {
    const modal = document.getElementById('certModal');
    const pdfContainer = document.getElementById('pdfContainer');
    const pdfDownloadLink = document.getElementById('pdfDownloadLink');
    
    // Update modal text content
    document.getElementById('modalCourse').textContent = name;
    document.getElementById('modalOrg').textContent = org;
    document.getElementById('modalDate').textContent = date;
    
    // Get PDF link for this certificate
    const pdfLink = certificatePDFs[name];
    
    if (pdfLink) {
        // Convert to embed link and set iframe source
        const embedLink = getEmbedLink(pdfLink);
        pdfContainer.innerHTML = '<iframe id="pdfViewer" src="' + embedLink + '" style="width: 100%; height: 100%; border: none;"></iframe>';
        pdfDownloadLink.href = pdfLink;
        pdfDownloadLink.style.display = 'inline';
    } else {
        // No PDF available - show placeholder message
        pdfContainer.innerHTML = 
            '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #718096;">' +
            '<p>Certificate PDF will be available soon.</p></div>';
        pdfDownloadLink.style.display = 'none';
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('certModal');
    const pdfContainer = document.getElementById('pdfContainer');
    modal.style.display = 'none';
    // Clear container content to stop any loading
    pdfContainer.innerHTML = '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Update total certificates count
window.onload = function() {
    const totalCerts = document.querySelectorAll('.cert-row').length;
    document.getElementById('totalCerts').textContent = totalCerts + '+';
}


/*** Lo del Caruosel ***/
function initCarousel({ trackId, dotsId, leftArrowSelector, rightArrowSelector, itemsPerPage = 12 }) {
    const track = document.getElementById(trackId);
    const cards = Array.from(track.querySelectorAll('.cert-card'));
    let currentPage = 0;

    // Crear páginas dinámicamente
    const pages = [];
    for (let i = 0; i < cards.length; i += itemsPerPage) {
        const page = document.createElement('div');
        page.classList.add('carousel-page');
        cards.slice(i, i + itemsPerPage).forEach(c => page.appendChild(c));
        pages.push(page);
    }

    // Limpiar y agregar páginas al track
    track.innerHTML = '';
    pages.forEach(p => track.appendChild(p));

    // Crear dots dinámicamente
    const dotsContainer = document.getElementById(dotsId);
    dotsContainer.innerHTML = '';
    pages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => moveToPage(index));
        dotsContainer.appendChild(dot);
    });

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentPage * 100}%)`;
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentPage);
        });
        updateArrows();
    };

    const updateArrows = () => {
        document.querySelector(leftArrowSelector).disabled = currentPage === 0;
        document.querySelector(rightArrowSelector).disabled = currentPage === pages.length - 1;
    };

    const moveCarousel = (direction) => {
        currentPage += direction;
        if (currentPage < 0) currentPage = 0;
        if (currentPage >= pages.length) currentPage = pages.length - 1;
        updateCarousel();
    };

    const moveToPage = (index) => {
        currentPage = index;
        updateCarousel();
    };

    // Conectar flechas
    document.querySelector(leftArrowSelector).addEventListener('click', () => moveCarousel(-1));
    document.querySelector(rightArrowSelector).addEventListener('click', () => moveCarousel(1));

    // Inicializar
    updateCarousel();
}

initCarousel({
    trackId: 'carouselTrackAWS',
    dotsId: 'carouselDotsAWS',
    leftArrowSelector: '.carousel-arrow-left-aws',
    rightArrowSelector: '.carousel-arrow-right-aws',
    itemsPerPage: 12
});

initCarousel({
    trackId: 'carouselTrackDatadog',
    dotsId: 'carouselDotsDatadog',
    leftArrowSelector: '.carousel-arrow-left-datadog',
    rightArrowSelector: '.carousel-arrow-right-datadog',
    itemsPerPage: 8
});




