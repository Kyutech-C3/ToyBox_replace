rm -rf msw
mkdir msw
cd schema
protoc --plugin=../protoc-plugin/protoc-gen-ts-msw-handlers/protoc-gen-ts-msw-handlers --ts-msw-handlers_out=../msw ./proto/schema/**/*.proto