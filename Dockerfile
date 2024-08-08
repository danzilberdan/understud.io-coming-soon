FROM node:22 as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM busybox:1.35

RUN adduser -D static
USER static
WORKDIR /home/static

COPY --from=build /app/dist .

CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]