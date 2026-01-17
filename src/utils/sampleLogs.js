/**
 * Sample Log Data
 * Contains various sample log entries for testing and demonstration
 */

export const sampleErrorLogs = `
2024-01-15T10:30:45.123Z ERROR [DatabaseService] Connection failed: ECONNREFUSED 192.168.1.100:5432
2024-01-15T10:30:46.456Z ERROR [AuthService] Authentication failed for user: admin@example.com
2024-01-15T10:31:00.789Z ERROR [PaymentGateway] Transaction declined: Insufficient funds (Card: ****1234)
2024-01-15T10:31:15.234Z ERROR [FileUpload] Failed to upload file: Maximum size exceeded (50MB limit)
2024-01-15T10:32:20.567Z ERROR [APIGateway] Rate limit exceeded for IP: 203.0.113.45
`;

export const sampleWarningLogs = `
2024-01-15T10:25:30.123Z WARN [CacheService] Cache miss rate exceeds 80% threshold
2024-01-15T10:26:15.456Z WARN [MemoryMonitor] Heap usage at 85% - Consider scaling
2024-01-15T10:27:00.789Z WARNING [SessionManager] Session pool nearing capacity: 950/1000
2024-01-15T10:28:45.234Z WARN [SecurityScanner] Deprecated API endpoint accessed: /api/v1/legacy
2024-01-15T10:29:30.567Z WARN [ConfigLoader] Using default configuration - custom config not found
`;

export const sampleInfoLogs = `
2024-01-15T10:15:00.123Z INFO [Server] Application started on port 3000
2024-01-15T10:15:05.456Z INFO [DatabaseService] Connected to PostgreSQL database
2024-01-15T10:15:10.789Z INFO [CacheService] Redis cache initialized successfully
2024-01-15T10:20:30.234Z INFO [UserService] New user registered: user_12345
2024-01-15T10:22:15.567Z INFO [OrderService] Order processed successfully: ORDER-2024-001
`;

export const sampleDebugLogs = `
2024-01-15T10:10:00.123Z DEBUG [Router] Route matched: GET /api/users/:id
2024-01-15T10:10:01.456Z DEBUG [Middleware] Authentication middleware executed
2024-01-15T10:10:02.789Z DEBUG [QueryBuilder] SQL query generated: SELECT * FROM users WHERE id = $1
2024-01-15T10:10:03.234Z DEBUG [ResponseFormatter] Formatting response with 15 records
2024-01-15T10:10:04.567Z DEBUG [Logger] Response time: 45ms
`;

export const sampleApacheAccessLogs = `
192.168.1.100 - frank [15/Jan/2024:10:15:30 +0000] "GET /index.html HTTP/1.1" 200 5432
203.0.113.45 - - [15/Jan/2024:10:16:45 +0000] "POST /api/login HTTP/1.1" 401 256
198.51.100.78 - alice [15/Jan/2024:10:17:00 +0000] "GET /dashboard HTTP/1.1" 200 12456
192.0.2.123 - - [15/Jan/2024:10:18:15 +0000] "DELETE /api/users/42 HTTP/1.1" 403 128
10.0.0.50 - bob [15/Jan/2024:10:19:30 +0000] "PUT /api/profile HTTP/1.1" 200 1024
`;

export const sampleMixedLogs = `
2024-01-15T09:00:00.000Z INFO [System] Daily backup started
2024-01-15T09:15:23.456Z DEBUG [BackupService] Backing up database: users_db
2024-01-15T09:30:45.789Z WARN [BackupService] Backup taking longer than usual: 15 minutes elapsed
2024-01-15T09:45:12.234Z ERROR [BackupService] Backup failed: Disk space insufficient
2024-01-15T09:45:13.567Z ERROR [AlertService] Critical alert sent to admin@example.com
2024-01-15T10:00:00.890Z INFO [System] Attempting backup retry with compression
2024-01-15T10:30:00.123Z INFO [BackupService] Backup completed successfully (compressed)
2024-01-15T11:00:00.456Z DEBUG [CleanupService] Removing old backup files (>30 days)
2024-01-15T11:15:00.789Z INFO [CleanupService] Freed 5.2GB of disk space
192.168.1.100 - admin [15/Jan/2024:11:20:00 +0000] "GET /admin/logs HTTP/1.1" 200 45678
2024-01-15T11:30:00.234Z WARN [MonitorService] CPU usage spike detected: 92%
2024-01-15T11:30:15.567Z DEBUG [ProcessManager] Analyzing high CPU processes
2024-01-15T11:31:00.890Z INFO [ProcessManager] Restarted worker process #3 due to high CPU
203.0.113.45 - - [15/Jan/2024:11:35:00 +0000] "POST /api/data/import HTTP/1.1" 500 2048
2024-01-15T11:35:01.123Z ERROR [ImportService] Data import failed: Invalid JSON format at line 1543
`;

export const sampleApplicationLogs = `
2024-01-15T08:00:00.000Z INFO [Application] Starting Log Triage Sandbox v1.0.0
2024-01-15T08:00:01.234Z INFO [ConfigService] Loading configuration from environment
2024-01-15T08:00:02.567Z DEBUG [ConfigService] Config loaded: {"env":"production","port":3000}
2024-01-15T08:00:03.890Z INFO [DatabaseService] Initializing database connection pool
2024-01-15T08:00:05.123Z INFO [DatabaseService] Connected to database: log_triage_db
2024-01-15T08:00:06.456Z INFO [CacheService] Initializing Redis cache client
2024-01-15T08:00:07.789Z WARN [CacheService] Redis connection delayed - retrying...
2024-01-15T08:00:10.234Z INFO [CacheService] Redis cache connected successfully
2024-01-15T08:00:11.567Z INFO [RouterService] Registered 25 API routes
2024-01-15T08:00:12.890Z INFO [MiddlewareService] Applied security middleware
2024-01-15T08:00:13.123Z INFO [Server] HTTP server listening on http://0.0.0.0:3000
2024-01-15T08:00:14.456Z INFO [Application] Application started successfully in 14.5 seconds
`;

export const sampleSecurityLogs = `
2024-01-15T12:00:00.123Z WARN [Security] Multiple failed login attempts detected for user: admin
2024-01-15T12:00:05.456Z WARN [Security] IP 198.51.100.99 attempted 5 failed logins in 60 seconds
2024-01-15T12:00:10.789Z ERROR [Security] Potential brute force attack from IP: 198.51.100.99
2024-01-15T12:00:11.234Z INFO [Security] IP 198.51.100.99 blocked for 1 hour
2024-01-15T12:15:30.567Z WARN [Security] Suspicious request pattern detected from 203.0.113.78
2024-01-15T12:16:00.890Z ERROR [Security] SQL injection attempt blocked: GET /api/users?id=1' OR '1'='1
2024-01-15T12:30:45.123Z INFO [Security] Security scan completed: 0 vulnerabilities found
2024-01-15T13:00:00.456Z WARN [Security] SSL certificate expires in 30 days
`;

export const samplePerformanceLogs = `
2024-01-15T14:00:00.123Z INFO [Performance] Request processed in 45ms
2024-01-15T14:00:05.456Z WARN [Performance] Slow query detected: 2.5s (threshold: 1s)
2024-01-15T14:00:10.789Z DEBUG [Performance] Query: SELECT * FROM large_table WHERE status = 'active'
2024-01-15T14:00:15.234Z INFO [Performance] Added index on large_table.status column
2024-01-15T14:01:00.567Z INFO [Performance] Request processed in 125ms (improved)
2024-01-15T14:05:30.890Z WARN [Performance] Memory usage at 1.8GB (threshold: 2GB)
2024-01-15T14:10:00.123Z ERROR [Performance] Request timeout after 30s
2024-01-15T14:15:45.456Z INFO [Performance] Average response time: 156ms
`;

// Combined sample logs for comprehensive testing
export const allSampleLogs = [
  sampleErrorLogs,
  sampleWarningLogs,
  sampleInfoLogs,
  sampleDebugLogs,
  sampleApacheAccessLogs,
  sampleMixedLogs,
  sampleApplicationLogs,
  sampleSecurityLogs,
  samplePerformanceLogs
].join('\n');

// Sample log categories for filtering
export const logCategories = {
  errors: sampleErrorLogs,
  warnings: sampleWarningLogs,
  info: sampleInfoLogs,
  debug: sampleDebugLogs,
  apache: sampleApacheAccessLogs,
  mixed: sampleMixedLogs,
  application: sampleApplicationLogs,
  security: sampleSecurityLogs,
  performance: samplePerformanceLogs,
  all: allSampleLogs
};

export default {
  sampleErrorLogs,
  sampleWarningLogs,
  sampleInfoLogs,
  sampleDebugLogs,
  sampleApacheAccessLogs,
  sampleMixedLogs,
  sampleApplicationLogs,
  sampleSecurityLogs,
  samplePerformanceLogs,
  allSampleLogs,
  logCategories
};
