// Home.test.js
import { render, screen } from '@testing-library/react'
import Home from './page'
import { directusClient } from '@/lib'
import { notFound } from 'next/navigation'
import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

// directusClient.itemsをモックする
jest.mock('../lib', () => ({
  directusClient: {
    items: jest.fn().mockReturnValue({
      readByQuery: jest.fn().mockResolvedValue({
        data: [
          // テスト用のダミーデータを返す
          {
            id: 'cf04f91d-ccb4-489d-b8f5-9fe858853449',
            status: 'draft',
            user_created: '55de1254-c959-401f-9c2d-058317878b84',
            date_created: '2023-07-24T01:07:46.310Z',
            date_updated: '2023-07-29T05:35:07.151Z',
            title: 'Joining the elephants in the wild: Thailand',
            description:
              'Thailand is a country in Southeast Asia. It is known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha.',
            slug: 'joining-the-elephants-in-the-wild-thailand',
            image: '8cd3906f-f9fc-4d67-a40e-fa5191928b9f',
            body:
              '<div>\n' +
              "<div>Thailand is a country in Southeast Asia. It is known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha. It is also home to many exotic animals, including elephants, tigers, and monkeys. Thailand is a popular tourist destination, with many visitors coming to see the country's natural wonders.</div>\n" +
              '</div>',
            category: '3992d20a-0f8e-42d1-a61a-2446900ab40f',
            author: '55de1254-c959-401f-9c2d-058317878b84',
          },
          {
            id: '89fc382c-2553-4756-aa58-de9e5982925d',
            status: 'draft',
            user_created: '55de1254-c959-401f-9c2d-058317878b84',
            date_created: '2023-07-24T00:26:46.671Z',
            date_updated: '2023-07-29T05:32:04.206Z',
            title: 'A lovely green city: New York',
            description:
              'New York is a city in the United States of America. It is the most populous city in the United States.',
            slug: 'a-lovely-green-city-new-york',
            image: 'a65da780-125f-4484-b1f8-c3ce10704553',
            body:
              '<h2>Introduction</h2>\n' +
              '<p>As a marine enthusiast, I embarked on an unforgettable journey to discover the wonders of the underwater world. The ocean, teeming with life, has always intrigued me, and I was eager to dive into this adventure.</p>\n' +
              '<h2>Setting Sail to the Blue Horizon</h2>\n' +
              '<p>My journey began at the coast, where I boarded a research vessel. The excitement was palpable as we set sail, leaving the familiar land behind and heading towards the vast blue horizon.</p>\n' +
              '<h2>Beneath the Surface: Diving into the Depths</h2>\n' +
              '<p>Equipped with scuba gear, I took my first plunge into the depths of the ocean. The moment I submerged, a whole new universe unfolded before my eyes, captivating me with its vibrant colors and diverse marine species.</p>\n' +
              '<h2>The Coral Wonderland</h2>\n' +
              '<p><strong>Exploring Reefs</strong> Among the most awe-inspiring sights were the coral reefs. Their kaleidoscopic beauty was breathtaking, and I marveled at the intricate ecosystems they support.</p>\n' +
              '<h2>Graceful Giants</h2>\n' +
              '<p><strong>Encounters with Marine Mammals</strong> During my journey, I had the privilege of encountering majestic marine mammals. Whales gracefully gliding through the water and dolphins playing in the waves left me in sheer awe of their intelligence and beauty.</p>\n' +
              '<h2>Mysterious Shipwrecks</h2>\n' +
              '<p><strong>Time Capsules of History</strong> Exploring sunken shipwrecks was like stepping into the past. These underwater time capsules offered a glimpse into history and served as artificial reefs, providing shelter for a variety of marine creatures.</p>\n' +
              '<h2>Nighttime Magic</h2>\n' +
              '<p><strong>Bioluminescent Spectacle</strong> As the sun set, the ocean transformed into a magical world of bioluminescence. Witnessing the shimmering lights emitted by plankton and other organisms was a surreal experience that left me enchanted.</p>\n' +
              '<h2>Eco-conscious Exploration</h2>\n' +
              '<p><strong>Nurturing Marine Conservation</strong> Throughout my journey, I became acutely aware of the fragility of marine ecosystems. I learned about conservation efforts and the urgent need to protect these invaluable habitats for future generations.</p>\n' +
              '<h2>Conclusion</h2>\n' +
              "<p>My adventure into the world of marine life was truly an eye-opening experience. Witnessing the beauty and vulnerability of our oceans reinforced my commitment to being a responsible steward of our planet's marine treasures. The wonders I encountered beneath the waves will forever be etched in my heart, inspiring me to continue advocating for the preservation of our marine world.</p>",
            category: '9faa728a-3ee0-4a01-802d-839f37087bfe',
            author: '55de1254-c959-401f-9c2d-058317878b84',
          },
          // 省略
        ],
      }),
    }),
  },
}))

// notFoundをモックする
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}))

describe('Home component', () => {
  it('should render posts', async () => {
    // Homeコンポーネントをレンダリングする
    render(await (async () => await Home())())

    // テスト用のダミーデータが表示されているか確認する
    expect(await screen.findByText('Post 1')).toBeInTheDocument()
    expect(await screen.findByText('Post 2')).toBeInTheDocument()

    // モック関数が呼ばれたか確認する
    expect(directusClient.items).toHaveBeenCalledTimes(1)
    expect(notFound).not.toHaveBeenCalled()
  })
})
