import { useGetUserQuery } from "$services/user.service";
import "flatpickr/dist/themes/material_green.css";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import './style.css';
type receipt = {
  bean: string;
  kg: number;
}
const Users = () => {
  const { data, isLoading, isError } = useGetUserQuery();
  const [receipt, setRecepit] = useState<receipt>({bean:'다크', kg:0})
  const beans = [
    '다크',
    '홈',
    '모건',
    '디카페인',
  ]
  function leftPad(value: number) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }
  function toStringByFormatting(source: any, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter) + " 09:00";
  }
  const [date, setDate] = useState(toStringByFormatting(new Date()))
  const handleReceipt = (bean: string, kg: number) =>setRecepit({bean, kg})
  return (
    <div className="p-5 container">
      <form>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="chKind" className="form-label">종류</label>
            <select id="chKind" onChange={(e) => handleReceipt(e.target.value, receipt.kg)} className="form-control" data-choices='{"searchEnabled":false, "allowHTML":true,"itemSelectText":""}'>
              <option value="no" disabled>Select User</option>
              {beans.map((b, i) => (
                <option value={b} key={i}>{b}</option>
              ))}
              <option value="sig" disabled>싱글 오리진(별도 문의)</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCount" className="form-label">양</label>
            <div className="input-group mb-3">
              <input type="number" onChange={(e) => handleReceipt(receipt.bean, Number(e.target.value))} data-format="custom" id="inputCount" placeholder="0" className="form-control" />
              <span className="input-group-text">kg</span>
            </div>
          </div>
          <div>
            배송 출발 희망일
            <Flatpickr
              className="form-control flatpickr-input active"
              data-enable-time={false}
              value={date}
              options={{ minDate: toStringByFormatting(new Date()) }}
              onChange={([ndate]) => {
                setDate(toStringByFormatting(ndate));
              }}
            />
          </div>
        </div>
        <div className="mt-5 d-md-flex justify-content-between align-items-center">
        <p className="small mb-4 mb-md-0">{receipt.bean} - {receipt.kg}kg  입금 금액: {(10000 * receipt.kg).toLocaleString('ko-KR')}원 </p>
        <input type="submit" name="submit" value="신청하기" id="sendBtn" className="btn btn-primary"/>
        </div>
        
      </form>
      <div className="mt-8">
        <div className="d-flex mb-4 align-items-center">
          <h6 className="mb-0 me-3">Table bordered</h6>
          <div className="pt-1 border-bottom flex-grow-1"></div>
        </div>
        <table className="table mb-9 table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">종류 / 수량</th>
              <th scope="col">배송 희망 일자</th>
              <th scope="col">상태</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">3</th>
              <td>다크 / 3kg</td>
              <td>2022-01-10</td>
              <td>신청 완료</td>
              <td><a className="btn btn-sm btn-primary">신청 취소</a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>모건 / 2kg</td>
              <td>2023-01-03</td>
              <td>출고 완료</td>
              <td><a className="btn btn-sm btn-primary">구매 확정</a></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>모건 / 2kg</td>
              <td>2023-01-01</td>
              <td>정산 완료</td>
              <td><a className="btn btn-sm btn-primary disabled">X</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

export const role = "USER";
