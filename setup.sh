#!/usr/bin/env bash

function create_dotenv_if_not_exist {
    if [ -f ".env.local" ]
    then
        echo "info: Файл .env.local уже существует, новый не будет создан"
    else
        cp .env.local.example .env.local
        echo "info: Файл .env.local был создан обновите его содержимое если требуется"
    fi
}

function install_mkcert_if_not_exist {
    if [ -f "`which mkcert`" ]
    then
        echo "info: Утилита mkcert уже установлена"
    else
        brew install mkcert nss
    fi
}

function instal_cert {
    echo "info: Устанавливаем корневой сертификат mkcert"
    cd dockerfile/dev/nginx && mkcert -key-file key.pem -cert-file cert.pem -install welltory.dev
}

function update_dns_record {
    if [ "`grep -c "welltory\.dev" /etc/hosts`" -ge 1 ]; then
        echo "info: DNS запись уже существует"
    else
        echo '127.0.0.1   welltory.dev' | sudo tee -a /etc/hosts
        echo "info: DNS запись была добавлена в /etc/hosts"
    fi
}

function macos_setup {
    echo "info: Настраиваем окружение для Mac OS X";
    create_dotenv_if_not_exist
    install_mkcert_if_not_exist
    instal_cert
    update_dns_record
}

function linux_setup {
    echo 'info: Linux сейчас не поддерживается, разбирайтесь самостоятельно как поднять'
}

function win_setup {
    echo 'info: MS Windows сейчас не поддерживается, разбирайтесь самостоятельно как поднять'
}

case "$(uname -s)" in

   Darwin)
     macos_setup
     ;;

   Linux)
     linux_setup
     ;;

   CYGWIN*|MINGW32*|MSYS*|MINGW*)
     win_setup
     ;;

   *)
     echo 'info: Мы не сделали скрипты для вашей системы, разбирайтесь самостоятельно как поднять'
     ;;
esac

