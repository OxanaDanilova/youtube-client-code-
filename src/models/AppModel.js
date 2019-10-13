export default class AppModel {
  constructor(state) {
    this.state = state;
    this.clipArray = [];
    this.currentPage = 1;
    this.nextPageToken = '';
  }

  static extractClipDescription(dataCounts) {
    window.console.log(this.nextPageToken);
    if (this.nextPageToken) {
      // eslint-disable-next-line no-console
      console.log('check if this worked correctly');
      for (let i = 0; i < dataCounts.items.length; i += 1) {
        const listItem = document.createElement('li');
        listItem.className = 'listItem';
        const div = document.createElement('div');
        div.className = 'clip';

        const preview = document.createElement('div');
        preview.className = 'preview';
        // eslint-disable-next-line max-len
        preview.style.backgroundImage = `url(${dataCounts.items[i].snippet.thumbnails.medium.url})`; //   clip preview as a picture
        div.appendChild(preview);

        const ahref = document.createElement('a');
        ahref.setAttribute('href', `https://www.youtube.com/watch?v=${dataCounts.items[i].id}`);
        div.appendChild(ahref);

        const clipTitle = document.createElement('h2');
        clipTitle.className = 'wrapped-title';
        clipTitle.innerHTML = dataCounts.items[i].snippet.title;
        ahref.appendChild(clipTitle);

        const clipData = document.createElement('ul');
        clipData.className = 'wrapped-clip-data';
        div.appendChild(clipData);

        const wrap = document.createElement('li');
        wrap.className = 'wrap';
        clipData.appendChild(wrap);

        const iconAuthor = document.createElement('i'); // icon author
        iconAuthor.classList = 'fas fa-male icons';
        wrap.appendChild(iconAuthor);

        const channelName = document.createElement('h3');
        channelName.className = 'wrapper-data';
        channelName.innerHTML = dataCounts.items[i].snippet.channelTitle;
        wrap.appendChild(channelName);

        const wrap2 = document.createElement('li');
        wrap2.className = 'wrap';
        clipData.appendChild(wrap2);

        const iconUploadDate = document.createElement('i'); // icon Upload Date
        iconUploadDate.classList = 'far fa-calendar-alt icons';
        wrap2.appendChild(iconUploadDate);


        const uploadDate = document.createElement('h3');
        uploadDate.className = 'wrapper-data';
        uploadDate.innerHTML = dataCounts.items[i].snippet.publishedAt.slice(0, 10);
        wrap2.appendChild(uploadDate);

        const wrap3 = document.createElement('li');
        wrap3.className = 'wrap';
        clipData.appendChild(wrap3);

        const iconViewCount = document.createElement('i'); // icon Views count
        iconViewCount.classList = 'far fa-eye icons';
        wrap3.appendChild(iconViewCount);

        const viewCounts = document.createElement('h3');
        viewCounts.className = 'wrapper-data';
        viewCounts.innerHTML = dataCounts.items[i].statistics.viewCount;
        wrap3.appendChild(viewCounts);

        const description = document.createElement('p');
        description.className = 'wrap-description';
        description.innerHTML = dataCounts.items[i].snippet.description;
        clipData.appendChild(description);


        listItem.appendChild(div);
      }
    } else {
    // ///Add Font Awesome////
      const link = document.createElement('link');
      link.href = 'https://use.fontawesome.com/releases/v5.8.2/css/all.css';
      link.rel = 'stylesheet';
      link.integrity = 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay';
      link.crossOrigin = 'anonymous';

      document.getElementsByTagName('head')[0].appendChild(link);
      // Remove slider and buttons for new request////////////
      let sliderBlock = document.getElementById('sliderBlock');
      const slider = document.getElementById('slider');
      if (slider) { sliderBlock.removeChild(slider); }
      if (sliderBlock) { document.body.removeChild(sliderBlock); }
      let wrapperButtons = document.getElementById('wrapperButtons');
      if (wrapperButtons) { document.body.removeChild(wrapperButtons); }


      window.console.log('need to update results');

      const clipArray = [];

      for (let i = 0; i < dataCounts.items.length; i += 1) {
        clipArray.push(dataCounts.items[i]);
      }
      this.clipArray = clipArray;
      window.console.log('attention, first element');
      window.console.log(this.clipArray[0]);

      sliderBlock = document.createElement('div');
      sliderBlock.className = 'sliderBlock';
      sliderBlock.setAttribute('id', 'sliderBlock');

      const myList = document.createElement('ul');
      myList.setAttribute('id', 'slider');

      for (let i = 0; i < dataCounts.items.length; i += 1) {
        const listItem = document.createElement('li');
        listItem.className = 'listItem';
        const div = document.createElement('div');
        div.className = 'clip';

        const preview = document.createElement('div');
        preview.className = 'preview';
        // eslint-disable-next-line max-len
        preview.style.backgroundImage = `url(${dataCounts.items[i].snippet.thumbnails.medium.url})`; //   clip preview as a picture
        div.appendChild(preview);

        const ahref = document.createElement('a');
        ahref.setAttribute('href', `https://www.youtube.com/watch?v=${dataCounts.items[i].id}`);
        div.appendChild(ahref);

        const clipTitle = document.createElement('h2');
        clipTitle.className = 'wrapped-title';
        clipTitle.innerHTML = dataCounts.items[i].snippet.title;
        ahref.appendChild(clipTitle);

        const clipData = document.createElement('ul');
        clipData.className = 'wrapped-clip-data';
        div.appendChild(clipData);

        const wrap = document.createElement('li');
        wrap.className = 'wrap';
        clipData.appendChild(wrap);

        const iconAuthor = document.createElement('i'); // icon author
        iconAuthor.classList = 'fas fa-male icons';
        wrap.appendChild(iconAuthor);

        const channelName = document.createElement('h3');
        channelName.className = 'wrapper-data';
        channelName.innerHTML = dataCounts.items[i].snippet.channelTitle;
        wrap.appendChild(channelName);

        const wrap2 = document.createElement('li');
        wrap2.className = 'wrap';
        clipData.appendChild(wrap2);

        const iconUploadDate = document.createElement('i'); // icon Upload Date
        iconUploadDate.classList = 'far fa-calendar-alt icons';
        wrap2.appendChild(iconUploadDate);


        const uploadDate = document.createElement('h3');
        uploadDate.className = 'wrapper-data';
        uploadDate.innerHTML = dataCounts.items[i].snippet.publishedAt.slice(0, 10);
        wrap2.appendChild(uploadDate);

        const wrap3 = document.createElement('li');
        wrap3.className = 'wrap';
        clipData.appendChild(wrap3);

        const iconViewCount = document.createElement('i'); // icon Views count
        iconViewCount.classList = 'far fa-eye icons';
        wrap3.appendChild(iconViewCount);

        const viewCounts = document.createElement('h3');
        viewCounts.className = 'wrapper-data';
        viewCounts.innerHTML = dataCounts.items[i].statistics.viewCount;
        wrap3.appendChild(viewCounts);

        const description = document.createElement('p');
        description.className = 'wrap-description';
        description.innerHTML = dataCounts.items[i].snippet.description;
        clipData.appendChild(description);


        listItem.appendChild(div);
        myList.appendChild(listItem);
        sliderBlock.appendChild(myList);
        document.body.appendChild(sliderBlock);
      }

      window.console.log('Time for pagination');

      //  Pagination/////////
      let cnt = 4; // clips per page by default
      // Counts clips per page depends on width of screen
      // eslint-disable-next-line max-len
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      if (width <= 800) { cnt = 2; }
      if (width <= 500) { cnt = 1; }


      let { currentPage } = this;
      currentPage = 1;

      let startPos = 0;
      let endPos = cnt;
      let posCursoraStart;
      let posCursoraEnd;

      // eslint-disable-next-line no-inner-declarations
      function dragStarting(e) {
        posCursoraStart = e.pageX;
      }

      // eslint-disable-next-line no-inner-declarations
      function dragStop(e) {
        posCursoraEnd = e.pageX;
        if (posCursoraEnd - posCursoraStart > 0) {
          // eslint-disable-next-line no-use-before-define
          prevRequest();
        } else if (posCursoraEnd - posCursoraStart < 0) {
          // eslint-disable-next-line no-use-before-define
          nextRequest();
        }
      }

      document.getElementById('slider').addEventListener('mousedown', dragStarting);
      document.getElementById('slider').addEventListener('touchstart', dragStarting);
      document.getElementById('slider').addEventListener('mouseup', dragStop);
      document.getElementById('slider').addEventListener('touchend', dragStop);


      // eslint-disable-next-line no-inner-declarations
      function clipDisplay() {
        const activeClip = document.querySelectorAll('.listItem');
        window.console.log('all clips');
        window.console.log(activeClip);
        activeClip.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
          item.style.display = 'none';
        });

        for (let j = startPos; j < activeClip.length; j += 1) {
          if (j < endPos) {
            activeClip[j].style.display = 'inline-block';
          }
        }
      }
      clipDisplay();

      // Previous and Next buttons ////

      wrapperButtons = document.createElement('div');
      wrapperButtons.className = 'wrapperButtons';
      wrapperButtons.setAttribute('id', 'wrapperButtons');

      // eslint-disable-next-line no-inner-declarations
      function animationPrev() {
        document.getElementById('slider').className = 'animation';
        setTimeout(() => { document.getElementById('slider').style.display = 'none'; }, 1000);
        setTimeout(() => { document.getElementById('slider').className = ''; }, 1000);
        setTimeout(clipDisplay(), 1000);
        setTimeout(() => { document.getElementById('slider').className = 'animation2'; }, 1000);
        setTimeout(() => { document.getElementById('slider').style.display = 'flex'; }, 1200);
        setTimeout(() => { document.getElementById('slider').className = ''; }, 1300);
      }


      // eslint-disable-next-line no-inner-declarations
      function animationNext() {
        document.getElementById('slider').className = 'animation2';
        setTimeout(() => { document.getElementById('slider').style.display = 'none'; }, 1000);
        setTimeout(() => { document.getElementById('slider').className = ''; }, 1000);
        setTimeout(clipDisplay(), 1000);
        setTimeout(() => { document.getElementById('slider').className = 'animation'; }, 1000);
        setTimeout(() => { document.getElementById('slider').style.display = 'flex'; }, 1200);
        setTimeout(() => { document.getElementById('slider').className = ''; }, 1300);
      }

      // eslint-disable-next-line no-inner-declarations
      function prevRequest() {
        if (startPos) {
          startPos -= cnt;
          endPos -= cnt;
          currentPage -= 1;
          animationPrev();
        }
      }

      let showingTooltip;
      // show Tooltips

      // eslint-disable-next-line no-inner-declarations
      function showTooltip(e) {
        const { target } = e;

        let tooltip = target.getAttribute('data-tooltip');

        if (currentPage === 1) {
          if (target.className === 'prevBtn') { return; }
          if (target.className === 'nextBtn') { tooltip = currentPage + 1; }
        } else {
          if (target.className === 'prevBtn') { tooltip = currentPage - 1; }
          if (target.className === 'nextBtn') { tooltip = currentPage + 1; }
          if (!tooltip) return;
        }

        const tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        tooltipElem.innerHTML = tooltip;
        document.body.appendChild(tooltipElem);

        const coords = target.getBoundingClientRect();
        const left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        const top = coords.top - tooltipElem.offsetHeight - 5;
        tooltipElem.style.left = `${left}px`;
        tooltipElem.style.top = `${top}px`;
        showingTooltip = tooltipElem;
      }

      // Hide Tooptip
      // eslint-disable-next-line no-inner-declarations
      function hideTooltip() {
        if (showingTooltip) {
          document.body.removeChild(showingTooltip);
          showingTooltip = null;
        }
      }


      const prevBtn = document.createElement('input');
      prevBtn.setAttribute('type', 'submit');
      prevBtn.setAttribute('value', 'Prev');
      prevBtn.setAttribute('data-tooltip', '1');
      prevBtn.className = 'prevBtn';
      wrapperButtons.appendChild(prevBtn);
      prevBtn.addEventListener('click', prevRequest);
      prevBtn.addEventListener('mouseover', showTooltip);
      prevBtn.addEventListener('mouseout', hideTooltip);


      // eslint-disable-next-line no-inner-declarations
      function nextRequest() {
        currentPage += 1;
        startPos += cnt;
        endPos += cnt;
        animationNext();
      }

      const nextBtn = document.createElement('input');
      nextBtn.setAttribute('type', 'submit');
      nextBtn.setAttribute('value', 'Next');
      nextBtn.className = 'nextBtn';
      wrapperButtons.appendChild(nextBtn);
      nextBtn.addEventListener('click', nextRequest);
      nextBtn.addEventListener('mouseover', showTooltip);
      nextBtn.addEventListener('mouseout', hideTooltip);
      document.body.appendChild(wrapperButtons);
    }
  }

  async getClipDescription() {
    this.state.url = `${this.state.url}&pageToken=${this.nextPageToken}`;
    const { url } = this.state;

    const responce = await fetch(url);
    const data = await responce.json();
    window.console.log('Display data');
    window.console.log(data);

    this.nextPageToken = data.nextPageToken;
    window.console.log('nextPageToken');
    window.console.log(this.nextPageToken);


    const arrId = [];
    for (let i = 0; i < data.items.length; i += 1) {
      arrId.push(data.items[i].id.videoId);
    }
    window.console.log(`array ID${arrId}`);

    const stat = arrId.join(',');
    this.clipId = stat;
    this.state.url2 = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAFSDB5FBKv0VY3iBiN4bIBw8NHQ69qGkw&id=${this.clipId}&part=snippet,statistics`;

    window.console.log(this);
    const { url2 } = this.state;
    window.console.log(`url2${url2}`);

    const respCounts = await fetch(url2);
    const dataCounts = await respCounts.json();
    window.console.log('oyoyoy, dataCounts');
    window.console.log(dataCounts);

    return AppModel.extractClipDescription(dataCounts);
  }
}
