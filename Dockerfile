FROM nginx

COPY build/. /usr/share/nginx/html

EXPOSE 80
CMD [ "service", "nginx",  "start" ]`
