package ateam.web;

public class PageHandler {
    private int totalCnt;       // 총 게시물 수
    private int pageSize;       // 한 페이지에 표시할 데이터 수
    private int naviSize = 5;   // 페이지 네비게이션의 개수 (5개씩 표시)
    private int totalPage;      // 전체 페이지의 개수
    private int page;           // 현재 페이지 번호
    private int beginPage;      // 페이지 네비게이션의 첫 번째 페이지
    private int endPage;        // 페이지 네비게이션의 마지막 페이지
    private boolean firstPage;  // 첫 번째 페이지 여부
    private boolean lastPage;   // 마지막 페이지 여부

    // 생성자
    public PageHandler(int totalCnt, int pageSize, int page) {
        this.totalCnt = totalCnt;
        this.pageSize = pageSize;
        this.page = page;

        // 전체 페이지 수 계산
        totalPage = (int) Math.ceil((double) totalCnt / pageSize);

        // 시작 페이지 번호 계산
        beginPage = Math.max(1, (page - 1) / naviSize * naviSize + 1);

        // 마지막 페이지 번호 계산
        endPage = Math.min(beginPage + naviSize - 1, totalPage);

        // 첫 번째 페이지 여부
        firstPage = (page == 1);

        // 마지막 페이지 여부
        lastPage = (page == totalPage);
        
        System.out.println("Page Size:" + pageSize);
        System.out.println("Total Pages: " + totalPage);
        System.out.println("Begin Page: " + beginPage);
        System.out.println("End Page: " + endPage);
    }

    // Getter 메서드들
    public int getTotalCnt() {
        return totalCnt;
    }

    public int getPageSize() {
        return pageSize;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public int getPage() {
        return page;
    }

    public int getBeginPage() {
        return beginPage;
    }

    public int getEndPage() {
        return endPage;
    }

    public boolean isFirstPage() {
        return firstPage;
    }

    public boolean isLastPage() {
        return lastPage;
    }
}
