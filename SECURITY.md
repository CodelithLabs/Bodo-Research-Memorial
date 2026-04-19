# Security Policy

## Supported Scope

This policy applies to the code and configuration in this repository.

## Reporting a Vulnerability

If you discover a security issue:

1. Do not open a public issue with exploit details.
2. Report privately to: contact@bodoresearch.org
3. Include reproduction steps, impacted area, and severity estimate.

## Response Targets

- Initial acknowledgement: within 5 business days
- Triage/update: within 10 business days
- Fix timeline: based on severity and risk

## Security Practices in This Project

- CSRF protection for sensitive write operations
- Role-based access checks for admin/editor actions
- Rate limiting on abuse-prone endpoints
- Audit logging for privileged actions

## Disclosure

After a fix is released, maintainers may publish a short advisory.
