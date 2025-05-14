const Checklist = () => {
  return (
        <div className="w-full flex-col">
        {/* 리스트 맵 넣기*/}
            <div className="w-full flex justify-between border-t border-grey py-2.5">
                <div className="text-black text-base">1반</div>
                <div className="text-black text-base">1번</div>
                <div className="text-black text-base">홍하나</div>
                <div className="text-base">식사 미완료</div> {/* 여기 컬러 조건 추가하기*/}
            </div>
        </div>
  )
}

export default Checklist
