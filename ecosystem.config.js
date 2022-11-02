module.exports = {
  apps : [{
    script: 'index.js',
  }],

  deploy : {
    production : {
      user : 'root',
      host : '192.168.103.23',
      ref  : 'origin/master',
      repo : 'https://github.com/RamtinNorouziiii/checkk',
      path : '/etc/nginx/react',
      'pre-deploy-local': '',
      'post-deploy' : ' source ~/.nvm/nvm.sh &&  npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh-options': 'ForwardAgent=yes'
    }
  }
};
