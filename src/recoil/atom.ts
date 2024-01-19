import { atom } from 'recoil';

//이메일로 가입
export const signUpInfoState = atom({
    key: 'signUpInfoState',
    default: {
        email: '',
        password: '',
        name: '',
        year: '',
        month: '',
        day: '',
        marketing: '',
    },
});

export const ScheduleInfoState = atom({
    key: 'scheduleInfoState',
    default: {
        category: '',
        title: '',
        content: '',
    }
})

//이메일 로그인
export const loginInput = atom({
    key: 'loginInputState',
    default: {
        email: '',
        password: '',
    }
})

interface UserState {
    email: string | null;
    token: string | null;
}
export const userState = atom<UserState>({
    key: 'userState',
    default: {
        email: null,
        token: null,
    }
})