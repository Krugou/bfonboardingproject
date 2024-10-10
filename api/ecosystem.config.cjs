module.exports = {
  apps: [
    {
      name: 'DBServer', // Application name
      script: './bfinno/server.js', // Script to be run
      watch: false, // Don't watch this app
      min_uptime: 10000, // Minimum time to keep the process alive
      ignore_watch: ['node_modules', 'logs', 'package-lock.json', 'src'], // Ignore watch on src folder to avoid infinite loop
      watch_delay: 3000, // Delay between restart
      cron_restart: '0 0 * * *', // Reboot at midnight
    },
  ],
};
