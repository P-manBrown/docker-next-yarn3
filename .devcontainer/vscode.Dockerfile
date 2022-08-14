FROM node:16.15.1

ARG PROJECT_NAME
ARG USER_NAME=node
ENV TZ=Asia/Tokyo

RUN corepack enable npm

USER ${USER_NAME}

RUN RECODE_BASH_LOG='\
      \n if [ "$SHLVL" = "2" ] ; then \n\
        \t script -f ~/bashlog/script/`date "+%Y%m%d%H%M%S"`.log \n\
      fi \n\
    '\
    EXPORT_PROMPT_COMMAND='\n export PROMPT_COMMAND="history -a"'\
    EXPORT_HISTFILE='\n export HISTFILE=~/bashlog/.bash_history' \
    && mkdir -p /home/${USER_NAME}/bashlog/script \
    && touch /home/${USER_NAME}/bashlog/.bash_history \
    && echo ${RECODE_BASH_LOG}${EXPORT_PROMPT_COMMAND}${EXPORT_HISTFILE} \
        >> "/home/${USER_NAME}/.bashrc"

RUN mkdir -p /home/${USER_NAME}/.vscode-server/extensions

WORKDIR /${PROJECT_NAME}

EXPOSE 3000
