from graphene_django import DjangoObjectType
from list_of_movies.models import Movie
import graphene

class MovieType(DjangoObjectType):
    class Meta:
        model = Movie

class Query(graphene.ObjectType):
    movies = graphene.List(MovieType)
    hello = graphene.String()

    def resolve_movies(self, info):
        return Movie.objects.all()

schema = graphene.Schema(query=Query)
