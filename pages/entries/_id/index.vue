<template>
  <div class="main-content">
    <div class="container">
      <v-card>
        <v-card-title class="pa-3">
          <h1 class="headline font-weight-bold">
            {{ entry.frontMatter.title }}
          </h1>
        </v-card-title>
        <v-card-text class="pa-1">
          <v-chip color="white">
            <v-icon color="blue" left>layers</v-icon>
            <CategoriesLink :categories="entry.frontMatter.categories" />
          </v-chip>
          <br />
          <v-chip
            color="white"
            text-color="orange"
            v-for="tag in entry.frontMatter.tags"
            :key="tag"
          >
            <v-avatar>
              <v-icon>label</v-icon>
            </v-avatar>
            <router-link :to="'/entries/tags/' + tag + '/'">
              {{ tag }}
            </router-link>
          </v-chip>
          <br />
          <v-chip color="white" text-color="black">
            <v-avatar>
              <v-icon>date_range</v-icon>
            </v-avatar>
            <strong>更新日時 : </strong>
            <strong>{{ entry.updated.date | moment }}</strong>
          </v-chip>
          <v-chip color="white" text-color="black">
            <v-avatar>
              <v-icon>date_range</v-icon>
            </v-avatar>
            <strong>投稿日時 : </strong>
            <strong>{{ entry.created.date | moment }}</strong>
          </v-chip>
        </v-card-text>
      </v-card>
      <div class="content pa-3" v-html="$md.render(entry.content)" />
      <v-divider class="pb-5"></v-divider>
      <v-row justify="center" align-content="center">
        <Prev :currentId="entryId" :exists="previousExists" />
        <v-btn to="/entries" class="mx-3" exact>
          <v-icon color="green" left>description</v-icon>
          <span>記事一覧</span>
        </v-btn>
        <Next :currentId="entryId" :exists="nextExists" />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Prism from "prismjs";
import CategoriesLink from "~/components/CategoriesLink.vue";
import moment from "moment";
import Prev from "~/components/Prev.vue";
import Next from "~/components/Next.vue";
import axios from "axios";

export default {
  async asyncData(context) {
    const baseUrl = process.env.API_BASE_URL || "http://localhost:8080";
    const entryId = Number(context.route.params.id);
    const [entry, previousExists, nextExists] = await Promise.all([
        axios.get(`${baseUrl}/entries/${entryId}`).then((res) => res.data),
        axios
          .get(`${baseUrl}/entries/${entryId - 1}`)
          .then(() => true)
          .catch(() => false),
        axios
          .get(`${baseUrl}/entries/${entryId + 1}`)
          .then(() => true)
          .catch(() => false)
      ]);

    return {
      entryId,
      entry,
      previousExists,
      nextExists
    };
  },
  components: {
    CategoriesLink,
    Prev,
    Next
  },
  mounted() {
    Prism.highlightAll();
  },
  head() {
    return {
      title: this.entry.frontMatter.title
    };
  },
  filters: {
    moment(value) {
      return moment(value).format("YYYY/MM/DD HH:mm");
    }
  }
};
</script>
<style lang="scss">
.content {
  margin: auto;
  h1,
  h2,
  h3,
  h4,
  p,
  pre {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  ul {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  li {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  td, th { 
    border: 0.5px #363636 solid; 
  }
  img {
    width: 80%;
  }
  pre {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    font-size: 0.9rem;
    margin-bottom: 36px;
  }
  blockquote {
    padding: 12px 6px;
  }
  a {
    word-break: break-all;
  }
  p > code {
    padding: 4px;
  }
}
@media screen and (max-width: 640px) {
  .content {
    h2 {
      font-size: 1.1rem;
    }
    img {
      width: 100%;
    }
    pre {
      border-radius: 0px;
      box-shadow: none;
    }
  }
}
</style>
