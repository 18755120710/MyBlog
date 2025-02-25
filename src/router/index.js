import { createRouter, createWebHistory } from 'vue-router'
import { useArticleListService } from '@/stores/articleList'

import home from '@/views/home/index.vue'
import wall from '@/views/wall/index.vue'
import welcom from '@/views/layout/index.vue'
import notes from '@/views/takeNotes/index.vue'
import NotesDetail from '@/views/takeNotes/components/NoteaDetail.vue'
import article from '@/views/studyArticle/index.vue'
import aboutMe from '@/views/aboutMe/index.vue'
import { useNotesListService } from '@/stores/notesList'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: home,
      redirect: '/welcome',
      children: [
        {
          path: 'welcome',
          component: welcom
        },
        {
          path: '/aboutMe',
          component: aboutMe
        },
        {
          path: 'wall',
          component:wall
        },
        {
          path: 'notes',
          component: notes
        },
        {
          path: '/notes/detail/:id',
          component: NotesDetail
        },
        {
          path: '/article',
          component: article
        }
      ],
      beforeEnter: async (to, from, next) => {
        const articleListstore = useArticleListService()
        const notesListStore = useNotesListService()
        if (!articleListstore.articleList.length) {
          await articleListstore.obtainArticleList()
        }
        if(!notesListStore.notesList.length) {
          await notesListStore.obtainNotesList()
        }
        next()
      }
    }
  ],
})

export default router
