FROM node:lts-alpine as build
WORKDIR /var/srv
COPY ./package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as production
COPY --from=build /var/srv/dist /usr/share/nginx/html

EXPOSE 80