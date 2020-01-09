# movieql
movie api with graphql

## movie api
- https://yts.lt/api/v2/list_movies.json?limit=50&minimum_rating=9

## ts를 사용함으로서 nomad 와 틀린점
- merge-graphql-schemas 패키지를 추가 하여 사용 (index.js 참고)
- cpy-cli, del-cli 를 resource 카피 하기 위해 --dev
- concurrently
- schema.ts 의 gql 을 사용하기 위하여 yarn add apollo-server
- apollo-datasource-rest 를 사용하여 외부 rest api 와 연결
- apoolo-datasource-rest 를 apolloserver 의 datasource 에 안넣고 외부에서 사용하면 initialize(context:{}, cache: new InMemoryLRUCache()) 를 호출해 줘야 함