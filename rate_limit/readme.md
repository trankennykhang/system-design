# System Design Rate Limiter Demo

This repository contains a rate limiter demo using Docker Compose and a load tester.

## Quick Start

Start the environment:

```bash
docker compose -f docker-compose.yml up -d
```

Stop the environment:

```bash
docker compose -f docker-compose.yml down
```

Alternatively, stop and restart the Compose services with:

```bash
docker compose down
docker compose up -d
```

## Test the API

Send a request to the demo API endpoint:

```bash
curl -i http://localhost:8011/api/resource
```

## Flood Attack Simulation

Launch a simulated flood of 5,000 requests using `bombardier`:

```bash
docker exec -it local_bombardier_tester bombardier -c 50 -n 5000 http://rate-limiter/api/res
```

## Notes

- `docker compose` commands assume you are in the `rate_limit` directory or that `docker-compose.yml` is available in the current working directory.
- The flood attack simulation runs from the `local_bombardier_tester` container against the `rate-limiter` service.
