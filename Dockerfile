FROM node:16.16.0

ARG PROJECT_NAME
ARG USER_NAME=node
ENV TZ=Asia/Tokyo

RUN corepack enable npm

USER ${USER_NAME}

WORKDIR /${PROJECT_NAME}

EXPOSE 3000
CMD ["yarn", "dev"]
