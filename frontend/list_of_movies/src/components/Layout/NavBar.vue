<template>
    <b-navbar type="dark" variant="dark">
        <b-navbar-brand href="/" tag="h1" class="mb-0">
            Fullstack Technical Test
        </b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/todo-items">
                    Todo Items
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: "NavBar"
}
</script>
