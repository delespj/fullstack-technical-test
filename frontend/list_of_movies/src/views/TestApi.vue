<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <TemplateAxios></TemplateAxios>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { TodoItemsQuery } from "@/graphql/queries/TodoItems.gql"
import TemplateAxios from "@/components/TemplateAxios/TemplateAxios.vue"

export default {
    name: "TodoItemsView",
    components: {
      TemplateAxios
    },
    apollo: {
        todoItems: {
            query: TodoItemsQuery
        }
    }
}
</script>
