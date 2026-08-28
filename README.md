# Ольга Чудинова — Портфолио

Персональный сайт-портфолио Менеджера сайта / Digital-маркетолога.

## Технологии

- HTML
- CSS
- Vanilla JavaScript

Статический сайт без backend, без сборки, без зависимостей.

## Структура

```
├── index.html          # главная страница
├── styles.css          # все стили
├── script.js           # навигация, анимации, интерактив
├── assets/
│   ├── olga-photo.jpg  # фото (замените на своё)
│   └── favicon.svg     # иконка сайта
├── .github/
│   └── workflows/
│       └── deploy.yml  # авто-деплой на GitHub Pages
├── .gitignore
└── README.md
```

## Запуск локально

Откройте `index.html` в браузере или запустите локальный сервер:

```bash
python3 -m http.server 8000
```

## Публикация на GitHub Pages

1. Создайте новый репозиторий на GitHub
2. Загрузите все файлы в репозиторий
3. GitHub Actions workflow автоматически опубликует сайт
4. Сайт будет доступен по адресу `https://<username>.github.io/<repo>/`

## Замена фото

Замените файл `assets/olga-photo.jpg` на свою фотографию.
Рекомендуемый формат: JPEG, 4:5, минимум 800×1000px.

## Замена контактов

Отредактируйте ссылки в `index.html` в секции `Contacts`:
- Email
- Telegram
- LinkedIn
