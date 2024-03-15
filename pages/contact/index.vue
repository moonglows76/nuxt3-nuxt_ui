<template>
  <div>
    <UBreadcrumb :links="links" />
    <h1 class="text-7xl mt-10 mb-4">Contact</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quam? Quam perspiciatis non ipsa. Molestiae odio
      exercitationem voluptates cumque harum corrupti quae porro quis? Sunt cumque rem quasi minima tenetur.</p>

    <h2 class="mt-5">お問い合わせフォーム</h2>
    <p>
      <label for="email" class="block mt-5">メールアドレス</label>
      <input required type="email" id="email" class="w-96 border border-gray-300 rounded px-2 py-1" v-model="email" />
    </p>
    <p>
      <label for="text" class="block mt-5">本文</label>
      <textarea required id="text" class="w-96 border border-gray-300 rounded px-2 py-1" v-model="message"
        rows="5"></textarea>
    </p>
    <p>
      <button type="button" @click="sendMail"
        class="mt-5 text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-300 transition-all duration-150 ease-in-out">メール送信</button>
    </p>
  </div>
</template>

<script setup>
const ogTitle = "Contact";
const ogDescription = "Contactページです";
useHead({
  title: ogTitle,
  meta: [
    { hid: "description", name: "description", content: ogDescription },
    { property: "og:type", content: "article" },
    {
      property: "og:title",
      content: ogTitle,
    },
    { property: "og:description", content: ogDescription },
  ],
});

const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'About',
}]

const email = ref('');
const message = ref('');

const sendMail = async () => {
  if (!email.value || !message.value) {
    return;
  }
  try {
    await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        text: message.value
      })
    })
    alert('メールを送信しました');
    email.value = '';
    message.value = '';
  } catch (error) {
    alert('メール送信に失敗しました。しばらく時間を置いて、もう一度お試しください。');
  }
}
</script>
