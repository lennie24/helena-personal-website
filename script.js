const exterior = document.querySelector("#exterior");
const interior = document.querySelector("#interior");
const enterButton = document.querySelector("#enter-cafe");
const backButton = document.querySelector("#back-outside");
const drawer = document.querySelector("#data-drawer");
const drawerContent = document.querySelector("#drawer-content");
const drawerClose = document.querySelector("#drawer-close");
const coffeeNote = document.querySelector("#coffee-note");
const coffeeTitle = document.querySelector("#coffee-title");
const coffeeLine = document.querySelector("#coffee-line");
const coffeeRecipe = document.querySelector("#coffee-recipe");
const coffeeClose = document.querySelector("#coffee-close");
const avatarWindow = document.querySelector("#avatar-window");
const avatarBubble = document.querySelector("#avatar-bubble");

const travelData = [
  { city: "东京", note: "又厚又白的雪和暖和的温泉，海鲜很好吃但是犯了肠胃炎。" },
  { city: "纽约", note: "阳光明媚，街道喧嚣，高楼林立，在脚手架底下穿行。" },
  { city: "洛杉矶", note: "加州果然与落日相配，傍晚从便利店买了草莓酸奶。" },
  { city: "巴黎", note: "油画，雕塑，博物馆，彩色玻璃，香水和悠闲的人。" },
  { city: "柏林", note: "高纬度地区特有的寒冷中带有清爽，街头艺术让人会心一笑。" },
  { city: "奥克兰", note: "帆船港口与农家牧场并存的城市，可参与的运动品种极多。" },
  { city: "伦敦", note: "岁月并没有稀释伦敦的魅力，它安然不语，给予人们沉默的回应。" },
  { city: "罗马", note: "刚买的冰淇淋很快就化了，滴在某个不知名文艺复兴时期的雕塑下。" },
];

const playlistData = [
  { song: "Por Una Cabeza（一步之遥）", artist: "Thomas Newman", url: "https://music.163.com/song?id=1808040375" },
  { song: "Stairway to Heaven (Remaster)", artist: "Led Zeppelin", url: "https://music.163.com/song?id=1808040375" },
  { song: "人间蜉蝣", artist: "未知音素 / 徐深", url: "https://music.163.com/song?id=1808040375" },
  { song: "Clara's Diner", artist: "Murray Gold", url: "https://music.163.com/song?id=1808040375" },
  { song: "Dead In The Water (Live At RTE 2F...)", artist: "Noel Gallagher's High Flying Birds", url: "https://music.163.com/song?id=1808040375" },
  { song: "Let's All Make Believe", artist: "Oasis", url: "https://music.163.com/song?id=1808040375" },
  { song: "The Next Best American Record", artist: "Lana Del Rey", url: "https://music.163.com/song?id=1808040375" },
  { song: "喜欢", artist: "张悬", url: "https://music.163.com/song?id=326719" },
  { song: "Mystery of Love", artist: "Sufjan Stevens", url: "https://music.163.com/song?id=516358164" },
  { song: "如愿", artist: "王菲", url: "https://music.163.com/song?id=1808040375" },
  { song: "西湖", artist: "痛仰乐队", url: "https://music.163.com/song?id=1808040375" },
  { song: "California", artist: "Lana Del Rey", url: "https://music.163.com/song?id=1808040375" },
  { song: "夜奔", artist: "黄诗扶", url: "https://music.163.com/song?id=1808040375" },
  { song: "For Martha", artist: "The Smashing Pumpkins", url: "https://music.163.com/song?id=1808040375" },
  { song: "Nightrain", artist: "Guns N' Roses", url: "https://music.163.com/song?id=1808040375" },
  { song: "Lose My Mind (feat. Doja Cat)", artist: "Don Toliver / Doja Cat", url: "https://music.163.com/song?id=1808040375" },
  { song: "November Rain", artist: "Guns N' Roses", url: "https://music.163.com/song?id=1808040375" },
  { song: "蓝莲花", artist: "许巍", url: "https://music.163.com/song?id=1808040375" },
  { song: "Wish You Were Here", artist: "Pink Floyd", url: "https://music.163.com/song?id=1808040375" },
  { song: "Mariners Apartment Complex", artist: "Lana Del Rey", url: "https://music.163.com/song?id=1808040375" },
];

const coffeeNotes = [
  { title: "晨光美式", line: "先做最小的一步，清醒感会自己续杯。", recipe: ["浓缩咖啡：30ml", "热水：150ml", "冰块：满杯"] },
  { title: "浅烘焙手冲", line: "酸味是时间写给味觉的短诗，不必急着读完。", recipe: ["咖啡豆：15g", "热水：240ml"] },
  { title: "浓郁拿铁", line: "奶泡升起来的时候，所有的棱角都学会了拥抱。", recipe: ["浓缩咖啡：30ml", "牛奶：200ml", "奶泡：30ml"] },
  { title: "海盐焦糖拿铁", line: "咸味落在甜里，像一场恰到好处的意外。", recipe: ["浓缩咖啡：30ml", "焦糖糖浆：15ml", "牛奶：200ml", "海盐：一小撮"] },
  { title: "椰青美式", line: "换一种水源，整片海岸线都住进杯底。", recipe: ["浓缩咖啡：30ml", "椰青水：120ml", "冰块：满杯"] },
  { title: "肉桂拿铁", line: "香气慢下来的时候，连时间都有了木质的纹理。", recipe: ["浓缩咖啡：30ml", "肉桂糖浆：10ml", "牛奶：200ml", "肉桂粉：少许"] },
  { title: "燕麦拿铁", line: "植物的温柔，比任何回音都更接近答案。", recipe: ["浓缩咖啡：30ml", "燕麦奶：200ml", "奶泡：少许"] },
  { title: "薄荷摩卡", line: "清凉不是撤退，是换一种节奏呼吸。", recipe: ["浓缩咖啡：30ml", "薄荷糖浆：10ml", "巧克力酱：15ml", "牛奶：180ml"] },
  { title: "玫瑰拿铁", line: "花香从不解释自己，却占据了一整条街的春天。", recipe: ["浓缩咖啡：30ml", "玫瑰糖浆：10ml", "牛奶：200ml"] },
  { title: "提拉米苏拿铁", line: "甜点的秘密，是连失败都愿意再等一会儿。", recipe: ["浓缩咖啡：30ml", "马斯卡彭奶酪：30g", "牛奶：150ml", "可可粉：少许"] },
  { title: "西柚气泡美式", line: "酸涩与气泡撞在一起，清醒忽然有了形状。", recipe: ["浓缩咖啡：30ml", "西柚汁：60ml", "苏打水：100ml", "冰块：满杯"] },
  { title: "冰滴咖啡", line: "慢是另一种速度，水穿过粉层时学会了耐心。", recipe: ["咖啡粉：50g", "冰水：400ml"] },
  { title: "抹茶拿铁", line: "绿色是静止的力量，不发光也可以很满。", recipe: ["抹茶粉：3g", "热水：20ml", "牛奶：200ml", "糖浆：10ml"] },
  { title: "姜黄拿铁", line: "暖色不是装饰，是身体记住了太阳的地址。", recipe: ["姜黄粉：2g", "姜粉：1g", "肉桂粉：0.5g", "牛奶：200ml"] },
  { title: "榛果卡布", line: "今天的 Helena 适合温柔而坚定地推进计划。", recipe: ["浓缩咖啡：30ml", "榛果糖浆：10ml", "牛奶：100ml", "奶泡：100ml"] },
  { title: "焦糖冷萃", line: "把普通想法熬久一点，甜味会从细节里渗出来。", recipe: ["冷萃咖啡液：200ml", "焦糖糖浆：15ml", "冰块：满杯", "牛奶：50ml"] },
  { title: "肉桂焦糖布蕾拿铁", line: "最上面那层脆壳，是沉默熬出的光泽。", recipe: ["浓缩咖啡：30ml", "焦糖糖浆：15ml", "牛奶：180ml", "砂糖：少许"] },
  { title: "黑芝麻拿铁", line: "黑色不是空，是底色够深，一切才站得稳。", recipe: ["黑芝麻酱：20g", "浓缩咖啡：30ml", "牛奶：200ml", "糖浆：10ml"] },
  { title: "椰奶冰拿铁", line: "换一个底色，整幅画的温度都会不同。", recipe: ["浓缩咖啡：30ml", "椰奶：200ml", "冰块：满杯"] },
  { title: "乌龙茶拿铁", line: "两种香气平行时，连思维都学会了分层。", recipe: ["浓缩咖啡：15ml", "乌龙茶汤：100ml", "牛奶：100ml", "糖浆：10ml"] },
  { title: "草莓白摩卡", line: "粉红色是理性之外，允许自己多一厘米的柔软。", recipe: ["浓缩咖啡：30ml", "白巧克力酱：20ml", "草莓糖浆：10ml", "牛奶：180ml"] },
  { title: "柠檬冰美式", line: "酸不是终点，是清醒转弯时的回音。", recipe: ["浓缩咖啡：30ml", "新鲜柠檬汁：15ml", "糖浆：10ml", "苏打水：100ml"] },
  { title: "墨西哥热巧克力咖啡", line: "香料的存在，是提醒你世界不止一种温暖。", recipe: ["浓缩咖啡：30ml", "可可粉：10g", "肉桂粉：1g", "牛奶：200ml"] },
  { title: "杏仁奶拿铁", line: "替代不是退场，是选择另一条路抵达。", recipe: ["浓缩咖啡：30ml", "杏仁奶：200ml", "杏仁糖浆：10ml"] },
  { title: "薰衣草拿铁", line: "香气是最短的隧道，通往自己。", recipe: ["浓缩咖啡：30ml", "薰衣草糖浆：10ml", "牛奶：200ml"] },
  { title: "豆奶抹茶拿铁", line: "两个植物系的答案，会叠加出双倍的春天。", recipe: ["抹茶粉：3g", "热水：20ml", "豆奶：200ml", "糖浆：10ml"] },
  { title: "冰激凌阿芙佳朵", line: "冷与热交汇的地方，会生出一个新的形状。", recipe: ["浓缩咖啡：30ml", "香草冰淇淋：一大球"] },
  { title: "姜汁气泡美式", line: "辛辣不是攻击，是唤醒所有沉睡的通路。", recipe: ["浓缩咖啡：30ml", "新鲜姜汁：10ml", "糖浆：10ml", "苏打水：120ml"] },
  { title: "泰式冰咖啡", line: "最甜的部分，常常藏在不加修饰的坚持里。", recipe: ["深度烘焙热咖啡：150ml", "炼乳：30ml", "冰块：满杯"] },
  { title: "蜂蜜肉桂热牛奶咖啡", line: "暖到刚好时，所有的决定都会自己浮现。", recipe: ["浓缩咖啡：15ml", "蜂蜜：15ml", "肉桂棒：1根", "牛奶：200ml"] },
];

function showScene(target) {
  const enteringInterior = target === "interior";
  exterior.classList.toggle("is-active", !enteringInterior);
  interior.classList.toggle("is-active", enteringInterior);
  closeDrawer();
  closeCoffeeNote();
}

function openDrawer(type) {
  const isTravel = type === "travel";
  drawerContent.innerHTML = isTravel ? renderTravel() : renderPlaylist();
  drawer.classList.toggle("map-drawer", isTravel);
  resetPanelPosition(drawer, isTravel ? "map" : "drawer");
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  closeCoffeeNote();
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  drawer.classList.remove("map-drawer");
}

function openCoffeeNote() {
  const seed = new Uint32Array(1);
  crypto.getRandomValues(seed);
  const item = coffeeNotes[seed[0] % coffeeNotes.length];
  coffeeTitle.textContent = item.title;
  coffeeLine.textContent = item.line;
  coffeeRecipe.innerHTML = item.recipe.map((line) => `<li>${line}</li>`).join("");
  resetPanelPosition(coffeeNote, "coffee");
  coffeeNote.classList.add("is-open");
  coffeeNote.setAttribute("aria-hidden", "false");
  closeDrawer();
}

function closeCoffeeNote() {
  coffeeNote.classList.remove("is-open");
  coffeeNote.setAttribute("aria-hidden", "true");
}

function renderTravel() {
  return `
    <div class="map-detail">
      <figure class="map-preview">
        <img src="assets/my_world_map.png" alt="Helena 去过的地方地图放大图" />
      </figure>
      <div class="map-list-panel">
        <p class="eyebrow">Map Data</p>
        <h3 class="drawer-title">我的旅行足迹</h3>
        <p class="drawer-subtitle">地图上标注的是我曾踏足的城市，以及我留下的城市印象。</p>
        <div class="place-list">
          ${travelData
            .map(
              (item, index) => `
                <article class="place-item">
                  <span class="rank">${index + 1}</span>
                  <div class="item-main">
                    <strong>${item.city}</strong>
                    <span>${item.note}</span>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}
function renderPlaylist() {
  return `
    <p class="eyebrow">Playlist Data</p>
    <h3 class="drawer-title">我的 Top 20 歌单</h3>
    <p class="drawer-subtitle">以下是我的听歌排行top20，点击右侧播放按钮可直接跳转对应播放界面。</p>
    <div class="song-list">
      ${playlistData
        .map(
          (item, index) => `
            <article class="song-item">
              <span class="rank">${index + 1}</span>
              <div class="item-main">
                <strong>${item.song}</strong>
                <span>${item.artist}</span>
              </div>
              <a class="play-link" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="播放 ${item.song}">▶</a>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function resetPanelPosition(panel, type) {
  panel.style.left = "";
  panel.style.top = "";
  panel.style.right = "";
  panel.style.bottom = "";
  panel.style.transform = "";

  if (type === "drawer") {
    panel.style.right = "clamp(14px, 3vw, 44px)";
  } else if (type === "map") {
    panel.style.left = "50%";
    panel.style.top = "50%";
    panel.style.transform = "translate(-50%, -50%)";
  }
}

function makeDraggable(panel) {
  let dragState = null;

  panel.addEventListener("pointerdown", (event) => {
    const blocked = event.target.closest("button, a, input, textarea, select, .song-list, .place-list");
    if (blocked) return;

    const rect = panel.getBoundingClientRect();
    panel.style.left = `${rect.left}px`;
    panel.style.top = `${rect.top}px`;
    panel.style.right = "auto";
    panel.style.bottom = "auto";
    panel.style.transform = "none";
    panel.classList.add("is-dragging");
    panel.setPointerCapture(event.pointerId);

    dragState = {
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
    };
  });

  panel.addEventListener("pointermove", (event) => {
    if (!dragState || dragState.pointerId !== event.pointerId) return;

    const width = panel.offsetWidth;
    const height = panel.offsetHeight;
    const nextLeft = Math.min(Math.max(8, event.clientX - dragState.offsetX), window.innerWidth - width - 8);
    const nextTop = Math.min(Math.max(8, event.clientY - dragState.offsetY), window.innerHeight - height - 8);

    panel.style.left = `${nextLeft}px`;
    panel.style.top = `${nextTop}px`;
  });

  panel.addEventListener("pointerup", (event) => {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    panel.classList.remove("is-dragging");
    panel.releasePointerCapture(event.pointerId);
    dragState = null;
  });

  panel.addEventListener("pointercancel", () => {
    panel.classList.remove("is-dragging");
    dragState = null;
  });
}

makeDraggable(drawer);
makeDraggable(coffeeNote);

enterButton.addEventListener("click", () => showScene("interior"));
backButton.addEventListener("click", () => showScene("exterior"));
drawerClose.addEventListener("click", closeDrawer);
coffeeClose.addEventListener("click", closeCoffeeNote);
document.querySelector("#map-hotspot").addEventListener("click", () => openDrawer("travel"));
document.querySelector("#music-hotspot").addEventListener("click", () => openDrawer("music"));
document.querySelector("#coffee-hotspot").addEventListener("click", openCoffeeNote);
avatarWindow.addEventListener("click", () => {
  avatarWindow.classList.toggle("is-revealed");
  avatarBubble.textContent = avatarWindow.classList.contains("is-revealed") ? "It's me,Helena." : "hi there";
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDrawer();
    closeCoffeeNote();
  }
});
