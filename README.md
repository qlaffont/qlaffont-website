# Quentin Laffont Website

## Demo

<https://qlaffont.com>

## Dependencies

- Next (React Framework)
- pnpm (Package Manager)
- tailwind (CSS)
- rosetty-react (i18n)

## Env Variables

You need to duplicate .env.example to .env and replace with your values

## Notion Instructions

- Duplicates templates for each pages
- Create an integration (<https://www.notion.so/my-integrations>)
- Copy Token to .env
- Invite your integration to your pages
- Precise on pages in getAllFieldsFromNotion parameter the id of your notion page (`https://www.notion.so/MY-ID-WITHOUT-URL-PARAMETER`)

## Hashnode Instructions

- Get your dev token (<https://hashnode.com/settings/developer>)
- Copy Token to .env
- Precise your username in pages/news.tsx

## Redis / Invalidation
To reduce issue with Notion Rate limit, we use Redis as Data cache.
You can force invalidation with /api/revalidate.

To automate your website updates, you can use Zappier to automatically update your website as soon as a data is updated. More info : [https://zapier.com/shared/5163410c91f0b88704fc27f6fb59548549e6294a](https://zapier.com/shared/5163410c91f0b88704fc27f6fb59548549e6294a)

## Start (dev)

```sh

pnpm dev

```

## Start (prod)

```sh

pnpm build
pnpm start

```
