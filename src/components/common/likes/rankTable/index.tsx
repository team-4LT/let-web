import RankMenu from '../rankMenu'
import RankBox from '../rankBox'

const RankTable = () => {
  return (
      <div className="w-full flex flex-col gap-5 px-7.5 py-5 bg-white rounded">
        <div className="flex justify-between">
          <p className="font-semibold text-base">메뉴 선호 순위</p>
          <div>buttons</div>
        </div>
        <div className="divide-y divide-grey">
          <RankMenu />
          <RankBox rank={1} menuName="불고기 치즈 파니니" score={95} changeValue={3} />
          <RankBox rank={2} menuName="제육볶음" score={89} changeValue={-1} />
          <RankBox rank={3} menuName="에그타르트" score={85} changeValue={-1} />
          <RankBox rank={4} menuName="버섯 탕수육" score={82} changeValue={-1} />
          <RankBox rank={5} menuName="전남친 베이글" score={80} changeValue={0} />
        </div>
      </div>
  )
}

export default RankTable
