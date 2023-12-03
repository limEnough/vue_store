import { DefineLocaleMessage } from 'vue-i18n';

export default () => {
  const messages = {
    // #region 공통
    common: {
      noData: '데이터가 존재하지 않습니다.',
      restrictedPermissions: '${authName} 권한이 없습니다.',
    },
    // #endregion

    // #region 유효성 검사
    validation: {
      required: '필수 항목입니다.',
    },
    // #endregion

    // #region 파일 관련
    file: {
      sizeExceeded: '파일 용량이 {n}를 초과했습니다. 다시 첨부해 주세요.',
      imageSizeExceeded: '이미지당 최대 용량은 {n} 입니다.',
      uploadImageFail: '이미지 업로드에 실패하였습니다.',
      exceededMaximumCount: '업로드 허용 개수를 초과하였습니다.',
      unacceptableExtension: '파일 형식이 올바르지 않습니다. 다시 첨부해 주세요.',
    },
    // #endregion

    // #region alert
    alert: {
      // #region 기획서 alert
      validationFailed: '입력 정보를 확인해 주세요.',
      emptySearchInput: '검색어 유형 선택 시, 검색어를 입력해 주세요.',
      saveSuccess: '저장이 완료되었습니다.',
      deleteSuccess: '삭제가 완료되었습니다.',
      systemError: '시스템 오류가 발생하였습니다.\n잠시 후 다시 시도해주세요.',
      // #endregion

      '001': '테스트 알럿 메시지 입니다.',
    },
    // #endregion

    // #region confirm
    confirm: {
      '001': '테스트 컨펌 메시지 입니다.',
    },
    // #endregion

    // #region guide
    guide: {
      imageFile: '{width}*{height} px 사이즈, {accept}형식의 이미지를 등록해 주세요.',
      allKeyboardCharacters: "영문 대소문자, 한글, 숫자, {'!@#$%^&*()_+{}:\"<>?-=[];'}'{',./`~'}만 입력 가능합니다.",
    },
    // #endregion

    // #region feedback
    feedback: {
      '001': '퍼센트는 최대 두자리까지 등록가능합니다.',
      '002': '금액은 10원단위부터 입력하실 수 있습니다.',
      '003': '소수점 {n}째자리까지 입력해주세요.',
      '004': '100 미만의 숫자로 입력 가능합니다.',
    },
    // #endregion
  } as const;

  return messages;
};
