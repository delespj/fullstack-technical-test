<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                {{ todoItems }}
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { TodoItemsQuery } from "@/graphql/queries/TodoItems.gql"

export default {
    name: "TodoItemsView",
    apollo: {
        todoItems: {
            query: TodoItemsQuery
        }
    }
}
</script>
