# PulseTile-NGinx-Container
Container for ease of deployment of PulseTile, - for Ripple related projects

## nginx_container

        sudo docker run -it --name nginx_conainer --rm --net qewd-net -v ~/qewd-courier/nginx/html:/usr/share/nginx/html -v  ~/qewd-courier/nginx/conf.d:/etc/nginx/conf.d -p 80:80 -p 443:443  nginx

**Note:** replace *-it* with *-d* to run it as a background daemon process.

Optional step for helping with configurations

How it works now :

1. We start script file (install.sh)
2. We typing domain name for project (e.g. test-example.com and press enter)
3. Third step we choose frontend project (Helm-ReactJS or Showcase-ReactJS, etc)

Script will change helm/configuration/global_config.json, oidc_provider/settings/configuration.json and will change nginx configs, if you are using QEWD as backend.

Also script will change path to UI files in nginx configuration
