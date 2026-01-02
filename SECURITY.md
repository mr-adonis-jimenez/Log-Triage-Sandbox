# Security Policy for Log Triage Sandbox

## 🛡️ Our Commitment

Security is a top priority and we value the work of security researchers and appreciate any effort to responsibly identify and report vulnerabilities.

If you believe you have found a security vulnerability, we encourage you to report it as soon as possible. We're committed to working with you to understand and resolve the issue.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Please use **GitHub's Private Vulnerability Reporting** feature, as it's the most secure and direct way to submit your report.

1.  Navigate to the main page of the repository.
2.  Under the repository name, click the **"Security"** tab.
3.  In the left sidebar, click **"Report a vulnerability"**.
4.  Please provide as much detail as possible in your report, including:
    * A description of the vulnerability.
    * Steps to reproduce the vulnerability.
    * The potential impact of the vulnerability.
    * Any suggested mitigations, if you have any.

### What to Expect

* We will do our best to acknowledge your report within 48 hours.
* We will provide you with updates as we work to investigate and resolve the issue.
* We will coordinate with you on public disclosure, if any is necessary.

## 🛠️ Security Best Practices

To proactively secure our repository, we follow several best practices:

* **Dependency Scanning:** We use **Dependabot** to automatically scan our `package-lock.json` file for known vulnerabilities in our dependencies and open pull requests to fix them.
* **Secure Workflows:** All GitHub Actions workflows are hardened by following the principle of least privilege. We explicitly set `permissions:` (e.g., `contents: read`) for each job to limit the `GITHUB_TOKEN`'s scope.
* **Static Code Analysis:** We use **CodeQL** to scan our codebase for common vulnerabilities and coding errors before they are merged.

## ✅ Supported Versions

As a "sandbox" project, we only provide security support for the latest commit on the **`main`** branch. Vulnerabilities found in other branches or forks are considered out of scope.

## ❌ Out-of-Scope Vulnerabilities

The following types of issues are considered out of scope:

* Social engineering or phishing attacks.
* Denial of Service (DoS) attacks.
* Reports from automated scanners with no manual validation or proof-of-concept.
* Vulnerabilities related to GitHub's infrastructure (please report those to GitHub directly).

We look forward to working with you to keep `log-triage-sandbox` secure.
