FROM ruby:3.3-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential git \
    && rm -rf /var/lib/apt/lists/*

# Keep the Gemfile outside /site: compose bind-mounts the repo there at run
# time, which would shadow the Gemfile.lock resolved here with the host's
# stale copy and make bundler fail on gems the image does not have.
ENV BUNDLE_GEMFILE=/gems/Gemfile
COPY Gemfile /gems/

# Gemfile.lock is gitignored to stay in sync with the latest github-pages gem
# (as GitHub Pages does in production), so resolve dependencies from the Gemfile.
RUN bundle install

WORKDIR /site

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--force_polling"]
